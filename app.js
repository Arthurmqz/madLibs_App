'use strict'

//Frist part - The original story telling
/*let originalStory =
  "In year 115, before the Great Battle, Babilon - The Mage Duck - fought well and brave to keep safe the Lake Blue, but unfortunally he was defeated by the powerful Ted - The Bear - it brings a lot of destruction to Lake Blue and made this place a home of Ted's clan. Years later, a new duck comes to bring back Lake Blue to Babilon's clan and free his people, this fearless duck is Junin - The Duck - he were hidding and training in the SharpMountains for 15 years to be prepared to recover what was a place that he called home. Junin - The Warrior Duck - never forget the sweet smell of lilic around the Lake Blue, and the lovelly memories he had there. Along the way back to recover his home, Junin made some friends as Paçoca - The Hunter Dog -, which help him to cross the endless maze , Bingugo - The Barberian Wolf -, which help him to find the great Destiny Sword, and Arex - the Wizzard Bird - that made Junin more confident about himself. After months of walking,  this different group arrived at Lake Blue and had a surprise, the Lake Blue no more exist, it is just a dark and lifeless bear's lair with a lot of differents animals' bones. At this moment Junin - The Warrior Duck - were fullfilled of hatred and fury. He went toweards to sleeping bears and iniciate a Great Battle, when his friends saw that scene, they went to aid in this quest. After hours of battle, finnaly Junin face Ted, and there was heard a great rumble like a thunder hitting a tree, this battle was unforgettable and everyone knows how it was important to Lake Blue history. At the end Junin and his friends won and defeat the Ted and recover the Lake Blue to ducks."

console.log(originalStory)
*/
//Second part - The user story telling

//Third part - Number of unique replacements
window.onload = () => {
  let questionTotal = 9

  let questionCounter = 0

  // Fourth part - Question

  /*let request = 'Please give a'
  let questionArray = prompt([`${request} name the protector`])
  prompt([`${request} name to our homeland`])
  prompt([`${request} name to the great Villian `])
  prompt([`${request} name to our Hero?`])
  prompt([`${request} type of place (Where our hero lives)`])
  prompt([`${request} name to this friend`])
  prompt([`${request} name to those friend`])
  prompt([`What is it? (A kind of weapon)`])
  prompt([`${request} Name to this friend`])
  prompt([`${request} Name to this group`])
*/
  let request = 'Please give a'
  let questionArray = [
    `${request} name the protector`,
    `${request} name to our homeland`,
    `${request} name to the great Villian `,
    `${request} name to our Hero?`,
    `${request} type of place (Where our hero lives)`,
    `${request} name to this friend`,
    `${request} name to those friend`,
    `What is it? (A kind of weapon)`,
    `${request} Name to this friend`,
    `${request} Name to this group`
  ]
  //

  let userInputs = []
  for (let i = questionTotal; i >= 0; i--) {
    // console.log(`The "i" of our "for" loop `);
    // console.log(i);
    // console.log("What question (of questionArray) is accessed (using questionCounter):");
    console.log(
      questionArray[questionCounter] + `... (${questionTotal} questions left)`
    )
    userInputs.push(
      prompt(
        questionArray[questionCounter] + `... (${questionTotal} questions left)`
      )
    )
    console.log(userInputs)
    questionCounter++
    // console.log(`This is the current "questionCounter" variable (it should go up):`);
    // console.log(questionCounter);
    questionTotal--
    // questionsLeft = `; (${questions} questions left)`;
    // console.log(`This is the current "Questions" variable (it should go down ... and be the same as the next "i"`);
    // console.log(questionTotal);
  }
  //

  //

  let userStory = `<h2>In year 115, before the Great Battle , ${userInputs[0]} - The Mage Duck - fought well and brave to keep safe the ${userInputs[1]}, but unfortunally he was defeated by the powerful ${userInputs[2]} - The Bear - it brings a lot of destruction to ${userInputs[1]} and made this place a home of ${userInputs[2]}'s clan.</h2> <h2>Years later, a new duck comes to bring back ${userInputs[1]} to ${userInputs[0]}'s clan and free his people, this fearless duck is ${userInputs[3]} - The Warrior Duck - he were hiding and training in the ${userInputs[4]} for 15 years to be prepared to reclaim what was a place that he called home. ${userInputs[3]} - The Warrior Duck - never forget the sweet smell of lilies around the ${userInputs[1]}, and the lovely memories he had there. Along the way back to recover his home, ${userInputs[3]} made some friends as ${userInputs[5]} - The Hunter Dog -, which help him to cross the ${userInputs[6]}, ${userInputs[7]} - The Barberian Wolf -, which help him to find the great ${userInputs[8]}, and ${userInputs[9]} - the Wizard Bird - that made ${userInputs[3]} more confident about himself.</h2> <h2>After months of walking, this ${userInputs[10]} group arrived at ${userInputs[1]} and had a surprise, the ${userInputs[1]} no more exist, it is just a dark and lifeless bear's lair with a lot of different animals' bones. At this moment ${userInputs[3]} - The Warrior Duck - were fulfilled of hatred and fury. He went towards to sleeping bears and initiate the Great Battle, when his friends saw that scene, they went to aid in this final quest. After hours of battle, finally ${userInputs[3]} face ${userInputs[2]}, and there was heard a great rumble like a thunder hitting a tree, this battle was unforgettable and everyone knows how it was important to ${userInputs[1]} history.</h2> <h2>At the end ${userInputs[3]} and his friends won and defeat the ${userInputs[2]} and recover the ${userInputs[1]} to ducks.</h2>`
  console.log(userStory)
  //

  alert('Well done! Ready for see your fantastic and great history ??')

  // Output
  console.log(userStory)
  document.write(userStory)
}
