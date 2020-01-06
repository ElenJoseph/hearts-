# Hearts

## Objective
Using what you know about the fundamentals of Javascript, create a standard deck of cards and deal out all the cards to the four players. 

## Requirements
The following requirements must be met in order to complete the assignment successfully:

### Step 1 
Clone this repository from GitHub. The repository contains an `index.html` file, `styles.css` file, and a `script.js` file. You may change any of the files as necessary. 

### Step 2 
Using the provided `suits` and `ranks` arrays and nested loops, create an array of objects. Each object will contain `suit` and `rank` property representing each card in a standard deck of cards.

*The computed array of objects should look something like this*
```js
[
  {"suit":"clubs","rank":2},
  {"suit":"clubs","rank":3},
  {"suit":"clubs","rank":4},
  {"suit":"clubs","rank":5},
  {"suit":"clubs","rank":6},
  ...
  {"suit":"spades","rank":"J"},
  {"suit":"spades","rank":"Q"},
  {"suit":"spades","rank":"K"},
  {"suit":"spades","rank":"A"}
]
```

### Step 3
Using the provide `shuffle()` function, shuffle the newly created deck of cards (Refer to the Shuffle Function section below). Store the results of the `shuffle()` to the provided game object. 

### Step 4
Using the shuffled deck and players object, deal out a card to each player one card at a time until every card has been dealt. Each player should have 13 cards.

### Step 5
Create a button for each player with the player's name on the button. Use the following button as a template. You may add additional attributes and classes as necessary.

```html
<button class="button">Player 1</button>
```

### Step 6
Add event handler to each button that will create and display the hand of each player, when the player's button is clicked. Use the following template for each card. You may add additional attributes and classes as necessary.

```html
<div class="card">
  <div class="number hearts">2</div>
  <div class="suit"><img src="images/hearts.png"></div>
  <div class="number hearts">2</div>
</div>
```

## Shuffle Function
The following screencast shows how to use the provided `shuffle()` function.

<Scrimba id="/c/cR3EJaTk" />

## Rubric

| Task | Points |
| ---  | :---:  | 
| Creates a full deck of cards | 5 |
| Shuffles the deck of cards | 3 |
| Deal out the cards to each player properly  | 5 |
| Create and display each players hands | 7 |
| **Total** | **20** | 

## Submission
1. Create a commit with the message "Completed the Hearts Assignment"
2. Push to GitHub
3. Submit the URL to your GitHub Repository to the **Hearts** assignment on BrightSpace

## Plagiarism Honor Code
By making the submission you also agree to the Algonquin College Student Attestation of Academic Integrity below: 

**I hereby declare that the work I submit throughout the duration of this course/program will be my own work.**

**I understand that plagiarism, whether done deliberately or accidentally, is defined as presenting someone else’s work, in whole or in part, as one’s own, and includes the verbal or written submission of another work (for example, ideas, wording, code, graphics, music, and inventions) without crediting that source. This includes all electronic sources (for example, the Internet, television, video, film, and recordings), all print and written sources (for example, books, periodicals, lyrics, government publications, promotional materials, and academic assignments), and all verbal sources (for example, conversations and interviews).**

**I understand that the facilitation of plagiarism, that is, one student sharing his or her work with other students, is also considered an act of plagiarism.**

**I understand that contravening Algonquin College Policy AA 20 - Plagiarism will result in an academic sanction(s) as described in this directive.**
