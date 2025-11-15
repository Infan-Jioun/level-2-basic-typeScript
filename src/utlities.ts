type Product = {
    id: string;
    name: string;
    price: string;
    stock: number;
    color?: string
}
//Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type
type ProductSummary = Pick<Product, "id" | "name">
// Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals). The opposite of Pick.
type ProductWithoutStock = Omit<Product, "price" | "stock">
//Constructs a type consisting of all properties of Type set to required. The opposite of Partial.
type colorReqired = Required<Product>
// const color: colorReqired = {
//     name: "mouse",
//     id: "343",
//     price: "600",
//     stock: 13,
//     color: "red"

// }
// Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
type optionProduct = Partial<Product>
// Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
type readonly = Readonly<Product>
//Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
const emtyObj: Record<string, unknown> = {}
const product1 = {
    id: 22,
    name: "Mouse",
    price: "42"
}
//This type is meant to model operations like await in async functions, or the .then() method on Promises - specifically, the way that they recursively unwrap Promises.
//Awaited<Type>

//Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
// Exclude<UnionType, ExcludedMembers>

//Constructs a type by excluding null and undefined from Type.
//NonNullable<Type>

//Constructs a tuple type from the types used in the parameters of a function type Type.
//Parameters<Type>

// Constructs a tuple or array type from the types of a constructor function type. It produces a tuple type with all the parameter types (or the type never if Type is not a function).
// ConstructorParameters<Type>

//Constructs a type consisting of the return type of function Type.
// ReturnType<Type>

//Constructs a type consisting of the instance type of a constructor function in Type.
//InstanceType<Type>

//Blocks inferences to the contained type. Other than blocking inferences, NoInfer<Type> is identical to Type.
// NoInfer<Type>



// Extracts the type of the this parameter for a function type, or unknown if the function type has no this parameter.
// ThisParameterType<Type>

//Removes the this parameter from Type. If Type has no explicitly declared this parameter, the result is simply Type. Otherwise, a new function type with no this parameter is created from Type. Generics are erased and only the last overload signature is propagated into the new function type.
// OmitThisParameter<Type>

//ThisType<Type> 
//This utility does not return a transformed type. Instead, it serves as a marker for a contextual this type. Note that the noImplicitThis flag must be enabled to use this utility.