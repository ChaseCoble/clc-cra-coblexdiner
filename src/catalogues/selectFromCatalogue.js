const masterCatalogue = {
    aboutUs : {
        categoryName : "About Us",
        subCategories : {
            introduction : {
                subCategoryName : "Introduction",
                contentHeader : 'Our Vision',
                content : {
                    soleValue : {
                        name : 'Mission Statement',
                        price : 0, 
                        desc : 'Our vision is to be the friendliest and most current internet cafe in all of Kansas. Our founder, Chase Coble, started this internet cafe to increase community support for the computer sciences in Salina as well as utilizing his three great passions; Computer Sciences, Culinary Arts, and Family! We are here to make you feel like family, learn like students, and eat like gourmets!'
                    }
                }
            },
            contactHours : {
                subCategoryName : "Hours and Contact Information",
                contentHeader : 'Contact Information and Hours',
                content : {  
                    contactContent : {
                        name : "Contact Us",
                        price : 0,
                        desc : 'CobleXCafe <br> 555 Walnut Ave <br> Salina, KS 67401 <br> 785-555-5555 <br> coblexcafe@gmail.com' 
                    },
                    hoursContent : {
                        name : "Hours and Events",
                        price : 0,
                        desc : 'Sunday : 4am - 12am <br> Monday : 4am - 12am <br> Tuesday : 4am - 12am <br> Wednesday : 4am - 12am <br> Thursday : 4am - 12am <br> Friday - Saturday : 430am Friday - 2am Sunday' 
                    }  
                }
            },
            staff : {
                subCategoryName : "Our Staff",
                contentHeader : 'Our Staff',
                content : {
                    soleValue : {
                        name : "Our Staff",
                        price : 0,
                        desc : 'Placeholder for sixmodals'
                    }
                }    
            },
        },
    },
    breakfast : {
        categoryName : 'Breakfast',
        subCategories : {
            introduction : { 
                subCategoryName : 'Introduction',
                contentHeader : 'Introduction',
                contentDesc : 'Our breakfast is prepared fresh every morning to facilitate the best possible start to your day!',
                content : {
                    soleValue : {
                        name : "Introduction",
                        price : 0,
                        desc: "Breakfast is served all day, and prepared on the spot after 11am to ensure maximum flavour and freshness"
                    }
                }
            },
            specials : {
                subCategoryName : 'Specials',
                contentHeader : 'Specials',
                contentDesc : 'All our specials are renowned by all that have tasted them. Our head cook has been making Loaded Biscuits and Gravy since he was 8 years old! A recipe perfected over time! The Stuffed French Toast is exquisite and the pancake platter is just what you need to start your day!',
                content : {
                    special1 : {
                        name : 'Loaded Byscuits and Gravy',
                        price : 13.99,
                        desc : 'Homemade biscuits and freshly made gravy with chunks of sausage, flavorful scrambled eggs, and made to order bacon bits!'
                    },
                    special2 : {
                        name : 'Stuffed French Toast',
                        price : 12.99,
                        desc : 'French toast made to order and stuffed with bananas, apples, or peaches!'
                    },
                    special3 : {
                        name : 'Pancake Platter',
                        price : 14.99,
                        desc : 'Four full size pancakes with either chocolate pieces, apple pieces, or caramel pieces, as well as 2 free sides!'
                    }
                }
            },
            sides : {
                subCategoryName : 'Sides',
                contentHeader : 'Sides',
                contentDesc : 'Our sides are expertly selected to complement our specials and maximize your enjoyment!',
                content : {
                    side1 : {
                        name : 'Extra Serving of Meat',
                        price : 3.99,
                        desc : 'A serving of four sausage links, 3 sausage patties, 2 strips of bacon or 1 slice of ham'
                    },
                    side2 : {
                        name : 'Eggs',
                        price : 2.99,
                        desc : 'Hard, medium, over easy or scramble, this serving of two fantastically seasoned eggs will round out any breakfast option'
                    },
                    side3 : {
                        name : 'Hot cereal',
                        price : 1.99,
                        desc : 'A bowl of hot homestyle grits, cream of wheat, or oatmeal served straight out of the pot to your table!'
                    }
                }
            },
            beverages : {
                subCategoryName : 'Beverages',
                contentHeader : 'Beverages',
                contentDesc : 'We offer several tiers of coffee drinks; Premium, Special, and Basic. Premium contains 3 or more flavors, Special contains 2 flavors, and Basic has one additional flavor. Flavors available are: Butter rum, caramel, peanut butter, chocolate, peppermint, vanilla, and cinammon.',
                content : {
                    beverage1 : {
                        name : 'Premium Coding Coffees',
                        price : 4.99,
                        desc : ['Any coffee containing 3 ingredients, ask about our Monkey Bananza, Caramel Crunch, and Stimulating Sunriser!',["beverageselectioncomponent"]] 
                    },
                    beverage2 : {
                        name : 'Special Coding Coffees',
                        price : 3.99,
                        desc : ['Any coffee containing 2 ingredients, ask about our Skinny Minty, and our Caramel Macchiato!',["beverageselectioncomponent"]] 
                    },
                    beverage3 : {
                        name : 'Essential Coding Coffees',
                        price : 2.99,
                        desc : ['A coffee with a single syrup but enough energy to fuel your productive day',['beverageselectioncomponent']] 
                    }
                }
            },
        }
    },
    lunch : {
        categoryName : 'Lunch',
        subCategories : {
            introduction : { 
                subCategoryName : 'Introduction',
                contentHeader : 'Introduction',
                contentDesc : 'Our lunch is based on a creative approach to different fusions, so no matter what you are craving, we have it ready fresh for you.',
                content : {
                    soleValue : {
                        name : "Introduction",
                        price : 0,
                        desc: "Our lunch is beautifully prepared to fulfill all your needs to boost you through the second half of your day!"
                    }
                }
            },
            specials : {
                subCategoryName : 'Specials',
                contentHeader : 'Specials',
                contentDesc : 'Our lunches are designed to empower you through your afternoon slump and provide relaxation on your well-deserved lunch break.',
                content: {
                    special1 : {
                        name : 'Gourmet Ramen',
                        price : 12.99,
                        desc : ['Ask for our customizable ramen menu and enjoy a different serving of ramen every single time!']
                    },
                    special2 : {
                        name : 'Chicken Noodle Soup',
                        price : 13.99,
                        desc : 'Hearty flavourful Chicken noodle soup with various vegetables and packed with nutrients and homemade noodles!'
                    },
                    special3 : {
                        name : 'Chef Salad',
                        price : 14.99,
                        desc : 'Full Chefs Salad with eggs, ham, bacon, and our whole slate of vegetables and a choice of 12 different dressings!'
                    }
                }
            },
            sides : {
                subCategoryName : 'Sides',
                contentHeader : 'Sides',
                contentDesc : 'Our sides are perfect to complete the meal you need to be the best you!',
                content : {
                    side1 : {
                        name : 'Cup of Soup',
                        price : 3.99,
                        desc : 'A half order of our selection of always on hand soups including Tomato Bisque, Chicken Noodle Soup (a variation of the special), and Minestrone'
                    },
                    side2 : {
                        name : 'Fries',
                        price : 2.99,
                        desc : 'Our crispy battered fries are perfectly light accompaniment to our symphonic specials!'
                    },
                    side3 : {
                        name : 'Fruit Selection',
                        price : 1.99,
                        desc : 'A serving of our seasonal selection of our fruits and veggies! Ask for portion size as each is different!'
                    }
                }
            },
            beverages : {
                subCategoryName : 'Beverages',
                contentHeader : 'Beverages',
                contentDesc : 'Our lunch selection of drinks include mixed sodas, artisan energy drinks, and customizable teas! Our flavour bank includes clove, cinnamon, nutmeg, seasonal fruits, and frozen fruits',
                content: {
                    beverage1 : {
                        name : 'Artisan Energy Drinks',
                        price : 4.99,
                        desc : ['Our artisan energy drinks include your favorite energy drinks mixed with fresh flavours.',["beverageselectioncomponent"]] 
                    },
                    beverage2 : {
                        name : 'Custom Teas',
                        price : 3.99,
                        desc : ['We have dozens of teas that you can customize with our bank of flavours',["beverageselectioncomponent"]] 
                    },
                    beverage3 : {
                        name : 'Mixed Sodas',
                        price : 2.99,
                        desc : ['Choose from our selection of popular sodas and a flavour from the bank to make a soda you enjoy! Chase swears by Pepsi and Rum flavoring!',["beverageselectioncomponent"]] 
                    }
                }
            },
        },
    }, 
    dinner : {
        categoryName : 'Dinner', 
        subCategories : {
            introduction : { 
                subCategoryName : 'Introduction',
                contentHeader : 'Introduction',
                contentDesc : "Our dinner portion of the day is designed to relax and soothe you after a hard day's work",
                content : {
                    soleValue : {
                        name : "Introduction",
                        price : 0,
                        desc: "Enjoy dinner with our live music and classy ambiance."
                    }
                }
            },
            specials : {
                subCategoryName : 'Specials',
                contentHeader : 'Specials',
                contentDesc : 'Our dinner options are selected to pull yourself together after the arduous day of being pulled in so many directions! Destress, descatter, reorganize and defragment to our original or live music!',
                content: {
                    special1 : {
                        name : 'Honey Thyme Chicken',
                        price : 12.99,
                        desc : 'Chicken marinated and roasted in the secret family recipe of spices! Served on a bed of root vegetables'
                    },
                    special2 : {
                        name : 'Pot Roast with Potatoes',
                        price : 14.99,
                        desc : 'Slow cooked pot roast served in either slices, shreds or chunks over a bed of fluffy fried mashed potatoes'
                    },
                    special3 : {
                        name : 'General Tso Wings',
                        price : 13.99,
                        desc : 'Crispy fried chicken wings tossed in a spicy and flavorful General Tso sauce'
                    }
                }
            },
            sides : {
                subCategoryName : 'Sides',
                contentHeader : 'Sides',
                contentDesc : 'Our sides are made to relax the body and mind and prepare you for a restful evening',
                content : {
                    side1 : {
                        name : 'Side Salad',
                        price : 3.99,
                        desc : 'A quarter serving of the Chef Salad, complete with hard boiled egg, ham, bacon, and veggie mix!',
                    },
                    side2 : {
                        name : 'Mashed Potatoes',
                        price : 2.99,
                        desc : 'Our decadent fluffy fried mashed potatoes with seasonings and your choice of gravy'
                    },
                    side3 : {
                        name : 'Seasonal Vegetable or Fruit Mix',
                        price : 1.99,
                        desc : 'A mix of our seasonal vegetable or fruit mix, ask what is available!'
                    }
                }
            },
            beverages : {
                subCategoryName : 'Beverages',
                contentHeader : 'Beverages',
                contentDesc :  'Dinner drinks are our absolute passion to make! Our owner is the main bartender and prizes himself on his exhaustive knowledge of mixological creations! Enjoy our adult mixed drinks, our virgin editions or a good old fashioned fountain drink!',
                content: {
                    beverage1 : {
                        name : 'Mixed Drinks',
                        price : 3.99,
                        desc : ['Your favorite mixed drink is available here at CobleXCafe! Long Island Iced Tea, Moscow Mule, and so many more are at your disposal!',["beverageselectioncomponent"]] 
                    },
                    beverage2 : {
                        name : 'Simple Mix',
                        price : 2.99,
                        desc : ['You enjoy a straight and a chaser or a simple Rum and Coke? This is the option for you!',["beverageselectioncomponent"]] 
                    },
                    beverage3 : {
                        name : 'Fresh Fruit Drinks',
                        price : 1.99,
                        desc : ['Limeades, lemonades, and punches, the choice is yours! We prize our user friendly customization options! You can think it, we can make it!',["beverageselectioncomponent"]] 
                    }
                }
            },
        }, 
    },
    services : {
        categoryName : 'Services',
        subCategories : {
            introduction : { 
                subCategoryName : 'Introduction',
                contentHeader : 'Introduction',
                contentDesc : 'Our services are provided for those who want to build their lives up through technology.',
                content : {
                    soleValue : {
                        name : "Introduction",
                        price : 0,
                        desc: "Most of our services are negotiable. Our owner wants to help everyone so feel free to schedule a meeting with him to discuss terms for our services"
                    }
                }
            },
            devices : {
                subCategoryName : "Device Rentals",
                contentHeader : "Device Rental Services",
                content : {
                    device1 : {
                        name : '3D Printing',
                        price : 0.50,
                        desc : 'Rate is for hour of service, additional fees will be applied by project by our automated system! Enjoy using a 3D printer to create anything you can design'
                    },
                    device2 : {
                        name : "3D Printing Design",
                        price : 0.25,
                        desc : 'An hour of service, designing for use on our or any other 3D printer, enjoy our computers optimized for 3D modeling!'
                    },
                    device3 : {
                        name: "Gaming Computers",
                        price: 0.25,
                        desc: 'Hour of usage on our high speed internet and high speed computers optimized for graphics and preloaded with many online games'
                        
                    }
                }
            },
            education : {
                subCategoryName : 'Educational Services',
                contentHeader : "Education Services",
                content : {
                    education1 : {
                        name : 'Tutoring',
                        price : 15.00,
                        desc : 'Flat rate for an hour of tutoring in almost any subject, however if you would like, you may schedule an appointment with the owner, and the fee can be assessed by need'
                    },
                    education2 : {
                        name : 'Seminar Classes',
                        price : 60.00,
                        desc : "Sign up for our next seminar, which lasts 3 hours with a light lunch provided!" 
                    },
                    education3 : {
                        name : 'Intensive Courses',
                        price : 120.00,
                        desc : "Sign up for a 2 hour a day 30 day course from our library, soon as we hit 3 participants a schedule will be released"
                    }
                }
            },
            offices : {
                subCategoryName : "Office Rentals",
                contentHeader : "Rental Offices",
                content : {
                    offices1 : {
                        name : 'Graphics Processing Office',
                        price : 120.00,
                        desc : "A weeks private use of an onsite office specializing in graphics processing. Includes a graphics optimized computer, desk, and chair. Will recieve a digital passcode upon purchase"
                    },
                    offices2 : {
                        name : "Coding Optimized Office",
                        price : 100.00,
                        desc : "A weeks private use of an onsite office specializing in coding websites and software. Includes a coding optimized computer, desk, and chair. Will recieve a digital passcode upon purchase"
                    },
                    offices3 : {
                        name : "Efficiency Office",
                        price : 50.00,
                        desc : "A weeks private use of an onsite office. Provides a desk, chair and ethernet plug in." 
                    }
                }
            }
        }
    },
};


const queryCatalogue = function queryCatalogue(menuState, subMenuStateClassification, subMenuState, subMenuStateDataCategories, menuStateContent) {
    var selectedCatalogue = '';
    switch (arguments.length) {
        case 5 : selectedCatalogue = masterCatalogue[menuState][subMenuStateClassification][subMenuState][subMenuStateDataCategories][menuStateContent]
            break; 
        case 4 :
            const selectionPrecursor1 = masterCatalogue[menuState];
            const selectionPrecursor2 = selectionPrecursor1[subMenuStateClassification];
            const selectionPrecursor3 = selectionPrecursor2[subMenuState]
            selectedCatalogue = selectionPrecursor3[subMenuStateDataCategories]
            break;
        case 3 : 
            selectedCatalogue = masterCatalogue[menuState][subMenuStateClassification][subMenuState]
            break;
        case 2 : 
            selectedCatalogue = masterCatalogue[menuState][subMenuStateClassification]
            break;
        case 1 : selectedCatalogue = masterCatalogue[menuState]
            break;
        case 0 : selectedCatalogue = masterCatalogue
            console.log('Possible query catalogue Error')
            break;
        default : console.log('queryCatalogue Default Error')
        }
        return selectedCatalogue;
}

export { queryCatalogue };