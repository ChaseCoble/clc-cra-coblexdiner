const chatbotVocabulary = {
        aboutUs : {
            introduction : ["Enjoy our vision statement, my programmer, I mean employer, has tons of passion for this establishment"],
            contactHours : ['An array of all our sockets, I mean a list of all our contact information!'],
            staff : ["Feel free to learn all you want about my sweet little human companions"]
        },
        breakfast : {
            introduction : ['The Bootup breakfast selection! What a wonderful choice! Enjoy uploading these dishes to your BIOS! ...Erm I mean your biological processes... Oh boy... Just try the Biscuits and Gravy, its a Coble family recipe!'],
            specials : [
                'What an invigorating breakfast!',
                'That is my favorite thing to eat in the morning!',
                'That would be an amazing start for the day!',
                'A full belly for a fully productive day!',
                "I didn't have 'breakfast' today, so I hope you leave me leftovers!",
                "Hope you slept well, and thank you for choosing us to start your day"
            ],
            sides : [
                "I didn't think the entree would fill me up either",
                "What a great complement to your special!",
                "Don't forget to get a beverage too!",
                "What a great choice to spice up your special!"
            ],
            beverages : [
                "A refreshing beverage to start your day",
                "A great way to parch your throat after an arduous wake up routine",
                "Our beverage team will be excited to make this drink for you!",
                "Tip your barista!",
                "Enjoy your refreshment"
            ],
        },
        lunch : {
            introduction : ['Ah yes! Loading up on lunch! My favorite meal of the processing cycle, I mean, day! My programmer, I mean my manager recommends trying the various variations of ramen he provide!'],
            specials : [
                "Hope this makes your lunch break fantastic!",
                "Hope this helps you thrive in the last half of your day",
                "Thank you for choosing us to serve you this afternoon",
                "That's why I order for lunch every day!",
                "Leave some for me! I haven't eat lunch yet!"
            ],
            sides : [
                "That will go great with the rest of your lunch",
                "I should try that side! I've never tasted it",
                "Don't forget to try our custom mixed sodas and juices with that!",
                "Our Artisan Energy drinks would go fabulously with your selections!"
            ],
            beverages : [
                "That will give you plenty of energy for the rest of the day!",
                "That's my favorite drink!",
                "You can order an extra drink to take home with you!",
                "That complements your meal perfectly!"
            ],
        }, 
        dinner : {
            introduction : ["The Defragging dinner! Enjoy our locally produced music and chill with our astonishing collection of mixed coolants, I mean drinks, and flavorful hearty memor- I mean meals! The kitchen's special of the day is the General Tso's wings!"],
            specials : [
                "What a lovely end to your day",
                "Thank you ever so kindly",
                "Don't forget a side and a lovely beverage",
                "That would go great with a Mixed Drink"
            ],
            sides : [
                "That goes with your special perfectly!",
                "You should try our famous Barracuda with that!",
                "That is the best side with dinner"
            ],
            beverages : [
                "Don't drink too many!",
                "Hope that relaxes you for a fun night!",
                "Relax, sit back, drink this beverage and enjoy our music",
                "That is our speciality!"
            ],
        }, 
        services : {
            introduction : ["Welcome to our repository of various services to provide all your data processing needs! Enjoy the use of our optimized offices and performant processors!"],
            devices : [
                "Enjoy the use of our facilities!",
                "Please clean up for our next patron!",
                "I hope you learn a lot about your passion!",
                "I love that you are trying to learn more about computers!"
            ],
            education : [
                "You are going to do so well in that class!",
                "All of us in the Coble X Diner family are rooting for you!",
                "Don't let discouragement chain you! You can do it!",
                "What an amazing opportunity!"
            ],
            offices : [
                "We can't wait to see you throughout that week!",
                "I hope this helps you succeed at your endeavours!",
                "We are excited to provide for your productivity needs!"
            ],
        }, 
        specialcontext: {
            checkout : ["Would you like to add a tip for your lovely virtual server? I accept bitcoin, dogecoin, and memory cards! Just kidding, though don't tip compu- compensated employees"],
            clearOrder : ["Feel free to start your order over! I have infinite RAM, I mean patience!"],
            firstMeeting : ['Hello! I am your totally alive and human server, Turing! Welcome to Coble X (pronounced Cross) Internet cafe! Enjoy browsing our menu selections of delectable delicacies and stellar services!'],
            checkoutComplete : ['Thank you for visiting! We hope to see you soon!']
        }
    }

    function selectChatbotDialogue(menuChatState, subMenuChatState) {
        const selectedChat = chatbotVocabulary[menuChatState][subMenuChatState];
        const randomChatString = selectedChat[Math.floor(Math.random()*selectedChat.length)];
            return (randomChatString)
    }
    
    export default selectChatbotDialogue;


