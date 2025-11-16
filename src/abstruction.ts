// 2 ways declare Abstruction
//  1. Interface
//  2. Abstruction

interface MediaPlayer {
    play(): void
    pause(): void
    stop(): void
}

// implemention
//implements ব্যবহার করা হয় যাতে class টা interface-এর সব rule বাধ্য হয়ে অনুসরণ করে, কোনো method বাদ না যায়।
class Musicplayer implements MediaPlayer {
    play(): void {
        console.log("Playing music ..... ");
    }
    pause(): void {
        console.log("Pause Music.....");
    }
    stop(): void {
        console.log("Stoped Music....");
    }
}

const infanPlayer = new Musicplayer();
infanPlayer.pause()