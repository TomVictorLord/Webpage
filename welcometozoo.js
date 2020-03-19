

let enter = prompt(`${objStory.firstName} arrives at the ${objStory.trip}, the sign over the gate welcomes them 'Chester zoo.' Do you want to go in?`)



if(enter == true) {
    alert(`${objStory.genderShortA} walks through the gate and look forward to an exciting day of adventure.`)}
 else {
    alert("You change your mind, leaving before you entered.")
}



let animals = prompt("Which animals do you want to see? lions, elephants, insects or monkeys. Or type continue to move on. Choose 1") 
if(animals === "") {
    alert("Choose an animal")
    const animals = prompt("Which animals do you want to see? lions, elephants, insects, or monkeys. Or type continue to move on. Choose 1")
}
    else if(animals == "lions") {
     alert(`"You chose the lions." + "${objStory.firstName} approach the lions, they are asleep." + "${objStory.firstName} waits for a few minutes, hoping one will wake up. One suddenlly strecthes and gives a mighty roar. It's eyes meet ${objStory.firstName}s and lock. It starts walking over to you, jaw hanging low, exposing its white glstening teeth. A few feet away it stops and suddenly flops over like a kitten. So cute!` )
     const animals = prompt("Which animals do you want to see? lions, elephants, insects, or monkeys. Choose 1")
    }
    else if(animals == "elephants") {
     alert("You chose the elephants.")
     const animals = prompt("Which animals do you want to see? lions, elephants, insects, or monkeys. Or type continue to move on. Choose 1")
    }
    else if(animals == "insects") {
     alert(`"You chose the insects. " + "${objStory.firstName} enters the bug house. " + "It/'s very dark and a little creepy" + "${objStory.firstName} approaches a dimly lit glass tank and see/'s eight hairy legs attached to a big hairy body. " + "The spider jumps at the glass and makes a strange sound. ${objStory.firstName} makes a run for it"`  )
     const animals = prompt("Which animals do you want to see? lions, elephants, insects, or monkeys. Or type continue to move on. Choose 1")
    }
    else if(animals == "monkeys") {
     alert("You chose the monkeys")
     const animals = prompt(`Which animals do you want to see? lions, elephants, insects, or monkeys. Or type continue to move on. Choose 1`)
    }
    else {
        alert("You decide to try out some activities in the zoo")
    }

    const activities = prompt("Which activities will you take part in? nature walk, zipwire, photography. Choose 1")
    if(activities == "") {
    alert("Choose an activity")
    const activities = prompt("Which activities will you take part in? nature walk, zipwire, photography. Or type continue to move on. Choose 1")
    }
    else if(activities == "nature walk") {
        alert(`"You chose the nature walk" + "${objStory.firstName} approaches the start of the nature path. ${objStory.genderShortA} starts down the path, looking left and seeing the zebras running through the long grass, like striped horse. " + "${objStory.genderShortA} looks right and see's the giraffes, their long necks reaching the fruit at the tops of the trees. " + "You near the end of the walk and your feet begin to hurt, you slow down and take in the beauty of the forsest, rays of sun slanting through the trees... Suddenly a dear springs in front of your step, bouncing along on all fours. You finish the walk."`)
    }
    else if(activities == "zipwire") {
        alert(`"You chose the zipwire." + "To get to the start of the zipwire ${objStory.firstName} had to climb a hill which made their legs ache." + "It suddenly seems a lot higher than it did down their... " + "${objStory.firstName} takes a few deep breaths readying themselves for the mission at hand. You/'re all locked in, the countdown begins. 3, 2, 1, Go!" + "You fly through the air, trees look small beneath your feet, you see the whole zoo from above and all the surrounding areas for miles in all directions." + "${objStory.firstName} comes crashing to a stop at the end of the wire, you instantly want to go again.`)
    }
    else if(activities == "photography") {
        alert(`"You chose photography" + "${objStory.firstName} winds up ${objStory.genderShortA} camera, it says '20 left' you plan to get a picture of each animal. " + " Flamingos first, 'say cheese!' They flap and sqauwk at you, looks good. " + "Alligators next, you consider climbing over the fence to get a better shot, then see one snap up a live fish out of the river and think better of it."`)
    }





