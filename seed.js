const mongoose = require("mongoose");
const Quote = require("./models/quotes"); // Adjust the path if needed

mongoose
  .connect("mongodb://127.0.0.1:27017/quotemusedb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

  // Quote.deleteMany({})
  // .then(() => {
  //   console.log("All quotes deleted successfully");
  //   // Close the database connection
  //   mongoose.connection.close();
  // })
  // .catch((error) => {
  //   console.error("Error deleting quotes:", error);
  //   // Close the database connection
  //   mongoose.connection.close();
  // });

const quotes = [
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    source: "personality",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    source: "personality",
  },
  {
    text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha",
    source: "personality",
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
    source: "personality",
  },
  {
    text: "Life is short, and it's up to you to make it sweet.",
    author: "Sarah Louise Delany",
    source: "personality",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    source: "personality",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    source: "personality",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    source: "personality",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    source: "personality",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    source: "personality",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    source: "personality",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
    source: "personality",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    source: "personality",
  },
  {
    text: "The harder I work, the luckier I get.",
    author: "Samuel Goldwyn",
    source: "personality",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    source: "personality",
  },
  {
    text: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown",
    source: "personality",
  },
  {
    text: "I'm king of the world!",
    author: "Jack Dawson",
    source: "movie",
    sourceName: "Titanic",
  },
  {
    text: "The past can hurt. But the way I see it, you can either run from it, or learn from it.",
    author: "Rafiki",
    source: "movie",
    sourceName: "The Lion King",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    source: "personality",
  },
  {
    text: "Life is short, and it's up to you to make it sweet.",
    author: "Sarah Louise Delany",
    source: "personality",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    source: "personality",
  },
  {
    text: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown",
    source: "personality",
  },
  {
    text: "I'm king of the world!",
    author: "Jack Dawson",
    source: "movie",
    sourceName: "Titanic",
  },
  {
    text: "The past can hurt. But the way I see it, you can either run from it, or learn from it.",
    author: "Rafiki",
    source: "movie",
    sourceName: "The Lion King",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    source: "personality",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    source: "personality",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    source: "personality",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
    source: "personality",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    source: "personality",
  },
  {
    text: "The harder I work, the luckier I get.",
    author: "Samuel Goldwyn",
    source: "personality",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    source: "personality",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    source: "personality",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    source: "personality",
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    source: "personality",
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle Onassis",
    source: "personality",
  },
  {
    text: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown",
    source: "personality",
  },
  {
    text: "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg",
    source: "personality",
  },
  {
    text: "Life isn't about finding yourself. It's about creating yourself.",
    author: "George Bernard Shaw",
    source: "personality",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    source: "personality",
  },
  {
    text: "The only way to deal with this life is to find the humor in it.",
    author: "Joan Rivers",
    source: "personality",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    source: "personality",
  },
  {
    text: "Life is short, and it's up to you to make it sweet.",
    author: "Sarah Louise Delany",
    source: "personality",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
    source: "personality",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    source: "personality",
  },
  {
    text: "The harder I work, the luckier I get.",
    author: "Samuel Goldwyn",
    source: "personality",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    source: "personality",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    source: "personality",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    source: "personality",
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    source: "personality",
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle Onassis",
    source: "personality",
  },
  {
    text: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown",
    source: "personality",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
    source: "personality",
  },
  {
    text: "The harder I work, the luckier I get.",
    author: "Samuel Goldwyn",
    source: "personality",
  },
  {
    text: "To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.",
    author: "Victor Hugo",
    source: "book",
    sourceName: "Les Misérables",
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    source: "book",
    sourceName: "Inaugural Address",
  },
  {
    text: "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
    author: "Charlotte Brontë",
    source: "book",
    sourceName: "Jane Eyre",
  },
  {
    text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    author: "Jane Austen",
    source: "book",
    sourceName: "Pride and Prejudice",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    source: "book",
    sourceName: "Management Challenges for the 21st Century",
  },
  {
    text: "You either die a hero, or you live long enough to see yourself become the villain.",
    author: "Harvey Dent",
    source: "movie",
    sourceName: "The Dark Knight",
  },
  {
    text: "I am groot.",
    author: "Groot",
    source: "movie",
    sourceName: "Guardians of the Galaxy",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    source: "book",
    sourceName: "Inaugural Address",
  },
  {
    text: "It does not do to dwell on dreams and forget to live.",
    author: "Albus Dumbledore",
    source: "book",
    sourceName: "Harry Potter and the Sorcerer's Stone",
  },
  {
    text: "It's the possibility of having a dream come true that makes life interesting.",
    author: "Paulo Coelho",
    source: "book",
    sourceName: "The Alchemist",
  },
  {
    text: "It's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
    source: "book",
    sourceName: "Various",
  },
  {
    text: "It takes something more than intelligence to act intelligently.",
    author: "Fyodor Dostoevsky",
    source: "book",
    sourceName: "Crime and Punishment",
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
    source: "book",
    sourceName: "Various",
  },
  {
    text: "Sometimes the questions are complicated and the answers are simple.",
    author: "Dr. Seuss",
    source: "book",
    sourceName: "Various",
  },
  {
    text: "The greatest teacher, failure is.",
    author: "Yoda",
    source: "movie",
    sourceName: "Star Wars: Episode III - Revenge of the Sith",
  },
  {
    text: "It is not our abilities that show what we truly are… it is our choices.",
    author: "Dumbledore",
    source: "movie",
    sourceName: "Harry Potter and the Chamber of Secrets",
  },
  {
    text: "The past can hurt. But the way I see it, you can either run from it or learn from it.",
    author: "Rafiki",
    source: "movie",
    sourceName: "The Lion King",
  },
  {
    text: "Books are a uniquely portable magic.",
    author: "Stephen King",
    source: "book",
    sourceName: "On Writing: A Memoir of the Craft",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
    source: "personality",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    source: "personality",
  },
  {
    text: "The harder I work, the luckier I get.",
    author: "Samuel Goldwyn",
    source: "personality",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    source: "personality",
  },
  {
    text: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown",
    source: "personality",
  },
  {
    text: "I'm king of the world!",
    author: "Jack Dawson",
    source: "movie",
    sourceName: "Titanic",
  },
  {
    text: "The past can hurt. But the way I see it, you can either run from it, or learn from it.",
    author: "Rafiki",
    source: "movie",
    sourceName: "The Lion King",
  },
  {
    text: "Why so serious?",
    author: "The Joker",
    source: "movie",
    sourceName: "The Dark Knight",
  },
  {
    text: "You have to do the best with what God gave you.",
    author: "Mrs. Gump",
    source: "movie",
    sourceName: "Forrest Gump",
  },
  {
    text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    author: "Albus Dumbledore",
    source: "book",
    sourceName: "Harry Potter and the Prisoner of Azkaban",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    source: "book",
    sourceName: "Management Challenges for the 21st Century",
  },
  {
    text: "You either die a hero, or you live long enough to see yourself become the villain.",
    author: "Harvey Dent",
    source: "movie",
    sourceName: "The Dark Knight",
  },
  {
    text: "I am Groot.",
    author: "Groot",
    source: "movie",
    sourceName: "Guardians of the Galaxy",
  },
  {
    text: "It does not do to dwell on dreams and forget to live.",
    author: "Albus Dumbledore",
    source: "book",
    sourceName: "Harry Potter and the Sorcerer's Stone",
  },
  {
    text: "It's the possibility of having a dream come true that makes life interesting.",
    author: "Paulo Coelho",
    source: "book",
    sourceName: "The Alchemist",
  },
  {
    text: "It's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
    source: "book",
    sourceName: "Various",
  },
  {
    text: "It takes something more than intelligence to act intelligently.",
    author: "Fyodor Dostoevsky",
    source: "book",
    sourceName: "Crime and Punishment",
  },
  {
    text: "Books are a uniquely portable magic.",
    author: "Stephen King",
    source: "book",
    sourceName: "On Writing: A Memoir of the Craft",
  },
  {
    text: "All we have to decide is what to do with the time that is given us.",
    author: "Gandalf",
    source: "book",
    sourceName: "The Fellowship of the Ring",
  },
  {
    text: "To be prepared for war is one of the most effective means of preserving peace.",
    author: "George Washington",
    source: "book",
    sourceName: "Farewell Address",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
    source: "personality",
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    source: "book",
    sourceName: "Inaugural Address",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    source: "book",
    sourceName: "Inaugural Address",
  },
  {
    text: "It is not our abilities that show what we truly are... it is our choices.",
    author: "Dumbledore",
    source: "movie",
    sourceName: "Harry Potter and the Chamber of Secrets",
  },
  {
    text: "The past can hurt. But the way I see it, you can either run from it or learn from it.",
    author: "Rafiki",
    source: "movie",
    sourceName: "The Lion King",
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
    source: "book",
    sourceName: "The Soul of Man Under Socialism",
  },
  {
    text: "The only way out of the labyrinth of suffering is to forgive.",
    author: "John Green",
    source: "book",
    sourceName: "Looking for Alaska",
  },
  {
    text: "The mind once stretched by a new idea, never returns to its original dimensions.",
    author: "Ralph Waldo Emerson",
    source: "book",
    sourceName: "Essays: First Series",
  },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
    source: "personality",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    source: "personality",
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
    source: "personality",
  },
  {
    text: "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown",
    source: "personality",
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
    source: "personality",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
    source: "personality",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    source: "personality",
  },
  {
    text: "The harder I work, the luckier I get.",
    author: "Samuel Goldwyn",
    source: "personality",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    source: "personality",
  },
  {
    text: "I'm king of the world!",
    author: "Jack Dawson",
    source: "movie",
    sourceName: "Titanic",
  },
  {
    text: "The past can hurt. But the way I see it, you can either run from it, or learn from it.",
    author: "Rafiki",
    source: "movie",
    sourceName: "The Lion King",
  },
  {
    text: "Why so serious?",
    author: "The Joker",
    source: "movie",
    sourceName: "The Dark Knight",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
    source: "personality",
  },
  {
    text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson",
    source: "personality",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    source: "personality",
  },
  {
    text: "It does not do to dwell on dreams and forget to live.",
    author: "Albus Dumbledore",
    source: "book",
    sourceName: "Harry Potter and the Sorcerer's Stone",
  },
  {
    text: "It's the possibility of having a dream come true that makes life interesting.",
    author: "Paulo Coelho",
    source: "book",
    sourceName: "The Alchemist",
  },
  {
    text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    author: "Jordan Belfort",
    source: "book",
    sourceName: "The Wolf of Wall Street",
  },
  {
    text: "It's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
    source: "book",
    sourceName: "Various",
  },
  {
    text: "It takes something more than intelligence to act intelligently.",
    author: "Fyodor Dostoevsky",
    source: "book",
    sourceName: "Crime and Punishment",
  },
  {
    text: "Sometimes the questions are complicated and the answers are simple.",
    author: "Dr. Seuss",
    source: "book",
    sourceName: "Various",
  },
  {
    text: "The greatest teacher, failure is.",
    author: "Yoda",
    source: "movie",
    sourceName: "Star Wars: Episode III - Revenge of the Sith",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    source: "personality",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    source: "personality",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    source: "personality",
  },
  {
    text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha",
    source: "personality",
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
    source: "personality",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    source: "personality",
  },
  {
    text: "Life is short, and it's up to you to make it sweet.",
    author: "Sarah Louise Delany",
    source: "personality",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    source: "personality",
  },
  {
    text: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown",
    source: "personality",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    source: "personality",
  },  
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    source: "personality",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    source: "personality",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    source: "personality",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
    source: "personality",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    source: "personality",
  },
  {
    text: "The harder I work, the luckier I get.",
    author: "Samuel Goldwyn",
    source: "personality",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    source: "personality",
  },
  {
    text: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown",
    source: "personality",
  },
  {
    text: "I'm king of the world!",
    author: "Jack Dawson",
    source: "movie",
    sourceName: "Titanic",
  },
  {
    text: "The past can hurt. But the way I see it, you can either run from it, or learn from it.",
    author: "Rafiki",
    source: "movie",
    sourceName: "The Lion King",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    source: "personality",
  },
  {
    text: "The greatest wealth is to live content with little.",
    author: "Plato",
    source: "book",
    sourceName: "The Republic",
  },
  {
    text: "Life is a journey that must be traveled no matter how bad the roads and accommodations.",
    author: "Oliver Goldsmith",
    source: "personality",
  },
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
    source: "personality",
  },
  {
    text: "The best revenge is massive success.",
    author: "Frank Sinatra",
    source: "personality",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    source: "personality",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    source: "personality",
  },
  {
    text: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown",
    source: "personality",
  },
  {
    text: "The past can hurt. But the way I see it, you can either run from it, or learn from it.",
    author: "Rafiki",
    source: "movie",
    sourceName: "The Lion King",
  },
  {
    text: "Why so serious?",
    author: "The Joker",
    source: "movie",
    sourceName: "The Dark Knight",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
    source: "personality",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    source: "book",
    sourceName: "Management Challenges for the 21st Century",
  },
  {
    text: "It's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
    source: "book",
    sourceName: "Various",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    source: "book",
    sourceName: "Inaugural Address",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
    source: "personality",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
    source: "book",
    sourceName: "99: Stories of the Game",
  },
  {
    text: "Do, or do not. There is no try.",
    author: "Yoda",
    source: "movie",
    sourceName: "Star Wars: Episode V - The Empire Strikes Back",
  },
  {
    text: "The only way to deal with this life is to find the humor in it.",
    author: "Joan Rivers",
    source: "personality",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    source: "personality",
  },
  {
    text: "Life is short, and it's up to you to make it sweet.",
    author: "Sarah Louise Delany",
    source: "personality",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    source: "personality",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
    source: "personality",
  },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
    source: "personality",
  },
  {
    text: "Don't cry because it's over, smile because it happened.",
    author: "Dr. Seuss",
    source: "personality",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    source: "personality",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    source: "personality",
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    source: "personality",
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle Onassis",
    source: "personality",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    source: "personality",
  },
  {
    text: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown",
    source: "personality",
  },

  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
    source: "personality",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
    source: "personality",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    source: "personality",
  },

  {
    text: "The greatest wealth is to live content with little.",
    author: "Plato",
    source: "book",
    sourceName: "The Republic",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
    source: "book",
    sourceName: "99: Stories of the Game",
  },
  {
    text: "Do, or do not. There is no try.",
    author: "Yoda",
    source: "movie",
    sourceName: "Star Wars: Episode V - The Empire Strikes Back",
  },
  {
    text: "Here's looking at you, kid.",
    author: "Rick Blaine",
    source: "movie",
    sourceName: "Casablanca",
  },
  {
    text: "Life is a journey that must be traveled no matter how bad the roads and accommodations.",
    author: "Oliver Goldsmith",
    source: "personality",
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    source: "personality",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    source: "personality",
  },
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
    source: "personality",
  },
  {
    text: "The best revenge is massive success.",
    author: "Frank Sinatra",
    source: "personality",
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
    source: "personality",
  },
  {
    text: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
    source: "personality",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    source: "personality",
  },
  {
    text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    author: "Jordan Belfort",
    source: "personality",
  },
  {
    text: "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg",
    source: "personality",
  },
  {
    text: "Life isn't about finding yourself. It's about creating yourself.",
    author: "George Bernard Shaw",
    source: "personality",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    source: "personality",
  },
  {
    text: "The only way to deal with this life is to find the humor in it.",
    author: "Joan Rivers",
    source: "personality",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    source: "personality",
  },
  {
    text: "Life is short, and it's up to you to make it sweet.",
    author: "Sarah Louise Delany",
    source: "personality",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
    source: "personality",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    source: "personality",
  },
  {
    text: "The harder I work, the luckier I get.",
    author: "Samuel Goldwyn",
    source: "personality",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    source: "personality",
  },
  {
    text: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown",
    source: "personality",
  },
  {
    text: "I'm king of the world!",
    author: "Jack Dawson",
    source: "movie",
    sourceName: "Titanic",
  },
  {
    text: "The past can hurt. But the way I see it, you can either run from it, or learn from it.",
    author: "Rafiki",
    source: "movie",
    sourceName: "The Lion King",
  },
  {
    text: "Why so serious?",
    author: "The Joker",
    source: "movie",
    sourceName: "The Dark Knight",
  },
  {
    text: "You have to do the best with what God gave you.",
    author: "Mrs. Gump",
    source: "movie",
    sourceName: "Forrest Gump",
  },
  {
    text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    author: "Albus Dumbledore",
    source: "book",
    sourceName: "Harry Potter and the Prisoner of Azkaban",
  },
  {
    text: "To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.",
    author: "Victor Hugo",
    source: "book",
    sourceName: "Les Misérables",
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    source: "book",
    sourceName: "Inaugural Address",
  },
  {
    text: "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
    author: "Charlotte Brontë",
    source: "book",
    sourceName: "Jane Eyre",
  },
  {
    text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    author: "Jane Austen",
    source: "book",
    sourceName: "Pride and Prejudice",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    source: "book",
    sourceName: "Management Challenges for the 21st Century",
  },

  {
    text: "You either die a hero, or you live long enough to see yourself become the villain.",
    author: "Harvey Dent",
    source: "movie",
    sourceName: "The Dark Knight",
  },
  {
    text: "I am groot.",
    author: "Groot",
    source: "movie",
    sourceName: "Guardians of the Galaxy",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    source: "book",
    sourceName: "Inaugural Address",
  },
  {
    text: "It does not do to dwell on dreams and forget to live.",
    author: "Albus Dumbledore",
    source: "book",
    sourceName: "Harry Potter and the Sorcerer's Stone",
  },
  {
    text: "It's the possibility of having a dream come true that makes life interesting.",
    author: "Paulo Coelho",
    source: "book",
    sourceName: "The Alchemist",
  },
  {
    text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    author: "Jordan Belfort",
    source: "book",
    sourceName: "The Wolf of Wall Street",
  },
  {
    text: "It's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
    source: "book",
    sourceName: "Various",
  },
  {
    text: "It takes something more than intelligence to act intelligently.",
    author: "Fyodor Dostoevsky",
    source: "book",
    sourceName: "Crime and Punishment",
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
    source: "book",
    sourceName: "Various",
  },
  {
    text: "Sometimes the questions are complicated and the answers are simple.",
    author: "Dr. Seuss",
    source: "book",
    sourceName: "Various",
  },

  {
    text: "The greatest teacher, failure is.",
    author: "Yoda",
    source: "movie",
    sourceName: "Star Wars: Episode III - Revenge of the Sith",
  },
  {
    text: "It is not our abilities that show what we truly are… it is our choices.",
    author: "Dumbledore",
    source: "movie",
    sourceName: "Harry Potter and the Chamber of Secrets",
  },
  {
    text: "The past can hurt. But the way I see it, you can either run from it or learn from it.",
    author: "Rafiki",
    source: "movie",
    sourceName: "The Lion King",
  },
  {
    text: "Books are a uniquely portable magic.",
    author: "Stephen King",
    source: "book",
    sourceName: "On Writing: A Memoir of the Craft",
  },
  {
    text: "All we have to decide is what to do with the time that is given us.",
    author: "Gandalf",
    source: "book",
    sourceName: "The Fellowship of the Ring",
  },
  {
    text: "To be prepared for war is one of the most effective means of preserving peace.",
    author: "George Washington",
    source: "book",
    sourceName: "Farewell Address",
  },
  {
    text: "It's the questions we can't answer that teach us the most. They teach us how to think. If you give a man an answer, all he gains is a little fact. But give him a question and he'll look for his own answers.",
    author: "Patrick Rothfuss",
    source: "book",
    sourceName: "The Wise Man's Fear",
  },
  {
    text: "The mind once stretched by a new idea, never returns to its original dimensions.",
    author: "Ralph Waldo Emerson",
    source: "book",
    sourceName: "Essays: First Series",
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
    source: "book",
    sourceName: "The Soul of Man Under Socialism",
  },
  {
    text: "The only way out of the labyrinth of suffering is to forgive.",
    author: "John Green",
    source: "book",
    sourceName: "Looking for Alaska",
  },
  
];

Quote.create(quotes)
  .then(() => {
    console.log("Quotes inserted successfully");
  })
  .catch((error) => {
    console.error("Error inserting quotes:", error);
  });

const uniqueQuotes = quotes.reduce((unique, quote) => {
  const existingQuote = unique.find(
    (q) => q.text === quote.text && q.author === quote.author
  );
  if (!existingQuote) {
    unique.push(quote);
  }
  return unique;
}, []);
