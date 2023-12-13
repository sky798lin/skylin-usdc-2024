/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
function findSearchTermInBooks(searchTerm, scannedTextObj) {
    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    if(searchTerm === "") {
        return result
    }

    for(const book of scannedTextObj) {
        for(const content of book.Content){
            const text = content.Text;
            const searchLocation = {
                "ISBN": book.ISBN,
                "Page": content.Page,
                "Line": content.Line
            };

            if(text.includes(" " + searchTerm + " ")) {
                result.Results.push(searchLocation);
            } else if(text.startsWith(searchTerm + " ") || text.endsWith(" " + searchTerm)) {
                result.Results.push(searchLocation);
            } else if(searchTerm === text) {
                result.Results.push(searchLocation);
            }
        }
    }

    
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
];
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
};

const test3in = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 9,
                "Text": "and however good the Canadian"
            }
        ]
    }
];

const test3to6out = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
};

const test4in = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 9,
                "Text": "the good Canadian"
            }
        ]
    }
];

const test5in = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 9,
                "Text": "however good the"
            }
        ]
    }
];

const test6in = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 9,
                "Text": "the"
            }
        ]
    }
];

const test7to13out = {
    "SearchTerm": "how",
    "Results": []
};

const test7in = [
    {
        "Title": "Under the Sea",
        "ISBN": "2023",
        "Content": [
            {
                "Page": 1,
                "Line": 5,
                "Text": "had managed to see"
            }
        ]
    }
];

const test8in = [
    {
        "Title": "Under the Sea",
        "ISBN": "2023",
        "Content": [
            {
                "Page": 1,
                "Line": 5,
                "Text": "He chowed more than he managed"
            }
        ]
    }
];

const test9in = [
    {
        "Title": "Under the Sea",
        "ISBN": "2023",
        "Content": [
            {
                "Page": 1,
                "Line": 5,
                "Text": "however good the canadian"
            }
        ]
    }
];

const test10in = [
    {
        "Title": "Under the Sea",
        "ISBN": "2023",
        "Content": [
            {
                "Page": 1,
                "Line": 5,
                "Text": "the canadian had the chow"
            }
        ]
    }
];

const test11in = [
    {
        "Title": "Under the Sea",
        "ISBN": "2023",
        "Content": [
            {
                "Page": 1,
                "Line": 5,
                "Text": "How he had managed to see, and"
            }
        ]
    }
];

const test12in = [];

const test13in = [
    {
        "Title": "Under the Sea",
        "ISBN": "2023",
        "Content": []
    }
];

const test14to15out = {
    "SearchTerm": "",
    "Results": []
};

const test14in = [
    {
        "Title": "Under the Sea",
        "ISBN": "2023",
        "Content": [
            {
                "Page": 1,
                "Line": 5,
                "Text": "How he had managed to see, and"
            }
        ]
    }
];

const test15in = [
    {
        "Title": "Under the Sea",
        "ISBN": "2023",
        "Content": [
            {
                "Page": 1,
                "Line": 5,
                "Text": "now simply went on by her own momentum.  The dark-"
            }
        ]
    }
];

const test16in = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    },
    {
        "Title": "Under the Sea",
        "ISBN": "2023",
        "Content": [
            {
                "Page": 1,
                "Line": 5,
                "Text": "How he had managed to see, and"
            },
            {
                "Page": 20,
                "Line": 17,
                "Text": "the eyes were Canadian"
            }
        ]
    }
];

const test16out = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "2023",
            "Page": 20,
            "Line": 17
        }
    ]
};

const test17in = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
];

const test17out = {
    "SearchTerm": "and however",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
};

const test18in = [];

const test18out = {
    "SearchTerm": "",
    "Results": []
};
/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** Test the first condition returns match, given a scannedTextObj that contains the searchTerm with space before and after in a line of text*/
const test3result = findSearchTermInBooks("the", test3in);
if(JSON.stringify(test3to6out) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", test3to6out)
    console.log("Received:", test3result)
}

/** Test the second condition returns match, given a scannedTextObj that contains the searchTerm at start with space after in a line of text*/
const test4result = findSearchTermInBooks("the", test4in);
if(JSON.stringify(test3to6out) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", test3to6out)
    console.log("Received:", test4result)
}

/** Test the second condition returns match, given a scannedTextObj that contains the searchTerm at end with space before in a line of text*/
const test5result = findSearchTermInBooks("the", test5in);
if(JSON.stringify(test3to6out) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", test3to6out)
    console.log("Received:", test5result)
}

/** Test the third condition returns match, given a scannedTextObj that contains only the searchTerm in a line of text*/
const test6result = findSearchTermInBooks("the", test6in);
if(JSON.stringify(test3to6out) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", test3to6out)
    console.log("Received:", test6result)
}

/** Test no match, given a searchTerm that does not appear at all in scannedTextObj */
const test7result = findSearchTermInBooks("how", test7in);
if(JSON.stringify(test7to13out) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", test7to13out)
    console.log("Received:", test7result)
}
/** Test no match, given a searchTerm that appears as part of the middle of a larger term in scannedTextObj */
const test8result = findSearchTermInBooks("how", test8in);
if(JSON.stringify(test7to13out) === JSON.stringify(test8result)) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", test7to13out)
    console.log("Received:", test8result)
}
/** Test no match, given a searchTerm that appears as part of the beginning of a larger term in scannedTextObj */
const test9result = findSearchTermInBooks("how", test9in);
if(JSON.stringify(test7to13out) === JSON.stringify(test9result)) {
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9");
    console.log("Expected:", test7to13out)
    console.log("Received:", test9result)
}
/** Test no match, given a searchTerm that appears as part of the end of a larger term in scannedTextObj */
const test10result = findSearchTermInBooks("how", test10in);
if(JSON.stringify(test7to13out) === JSON.stringify(test10result)) {
    console.log("PASS: Test 10");
} else {
    console.log("FAIL: Test 10");
    console.log("Expected:", test7to13out)
    console.log("Received:", test10result)
}
/** Test no match, given a searchTerm that appears as a differently capitalized term in scannedTextObj */
const test11result = findSearchTermInBooks("how", test11in);
if(JSON.stringify(test7to13out) === JSON.stringify(test11result)) {
    console.log("PASS: Test 11");
} else {
    console.log("FAIL: Test 11");
    console.log("Expected:", test7to13out)
    console.log("Received:", test11result)
}
/** Test no match, given a scannedTextObj that contains no objects */
const test12result = findSearchTermInBooks("how", test12in);
if(JSON.stringify(test7to13out) === JSON.stringify(test12result)) {
    console.log("PASS: Test 12");
} else {
    console.log("FAIL: Test 12");
    console.log("Expected:", test7to13out)
    console.log("Received:", test12result)
}
/** Test no match, given a scannedTextObj that contains objects with no content */
const test13result = findSearchTermInBooks("how", test13in);
if(JSON.stringify(test7to13out) === JSON.stringify(test13result)) {
    console.log("PASS: Test 13");
} else {
    console.log("FAIL: Test 13");
    console.log("Expected:", test7to13out)
    console.log("Received:", test13result)
}
/** Test no match, given an empty searchTerm */
const test14result = findSearchTermInBooks("", test14in);
if(JSON.stringify(test14to15out) === JSON.stringify(test14result)) {
    console.log("PASS: Test 14");
} else {
    console.log("FAIL: Test 14");
    console.log("Expected:", test14to15out)
    console.log("Received:", test14result)
}
/** Test no match, given an empty searchTerm and a scannedTextObj that contains a line with consecutive spaces*/
const test15result = findSearchTermInBooks("", test15in);
if(JSON.stringify(test14to15out) === JSON.stringify(test15result)) {
    console.log("PASS: Test 15");
} else {
    console.log("FAIL: Test 15");
    console.log("Expected:", test14to15out)
    console.log("Received:", test15result)
}
/** Test outer loop, given multiple objects in the scannedTestObj */
const test16result = findSearchTermInBooks("the", test16in);
if(JSON.stringify(test16out) === JSON.stringify(test16result)) {
    console.log("PASS: Test 16");
} else {
    console.log("FAIL: Test 16");
    console.log("Expected:", test16out)
    console.log("Received:", test16result)
}
/** Test match, given a multi-word searchTerm with spaces */
const test17result = findSearchTermInBooks("and however", test17in);
if(JSON.stringify(test17out) === JSON.stringify(test17result)) {
    console.log("PASS: Test 17");
} else {
    console.log("FAIL: Test 17");
    console.log("Expected:", test17out)
    console.log("Received:", test17result)
}
/** Test no match, given both empty parameters */
const test18result = findSearchTermInBooks("", test18in);
if(JSON.stringify(test18out) === JSON.stringify(test18result)) {
    console.log("PASS: Test 18");
} else {
    console.log("FAIL: Test 18");
    console.log("Expected:", test18out)
    console.log("Received:", test18result)
}
