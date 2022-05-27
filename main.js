$("#wf-form-quizForm").submit(()=>{
    // Find the users name
        let name = $("#yourName").val();
        let nameInt = name.length;

        if (nameInt === 0) {
            alert("Please enter a name") //Name Validation
            return true;
        }

        let a1 = parseInt($('input[name = "method"]:checked').val());
        let a2 = parseInt($('input[name = "how"]:checked').val());
        let a3 = parseInt($('select[name = "cups"]').val());
        let a4 = parseInt($('input[name = "roast"]:checked').val());
        let a5 = parseInt($('input[name = "flavor"]:checked').val());

        var score = (a1 + a2 + a3 + a4 + a5);

        // Possible Answers
        var coffee = [{
            name: "Banko Gotiti",
            origin: "Ethiopia",
            singleOrigin: "Single Origin",
            process: "Natural",
            elevation: "2000 - 2300m",
            flavorProfile: "Grape, Fruit Punch, Dark Chocolate",
            story: "The Banko Gotiti Cooperative is located in the village of Banko Gotiti in the district of Gedeb of the Gedeo Zone, Ethiopia. With approximately 300 smallholder members, Banko Gotiti was established in 2012. Most of the smallholders are either growing coffee in semi-forest conditions where coffee is growing naturally in the forest and are tended on or in garden conditions where smallholders cultivate coffee near their homes. As a result of high standards and expectations, the cooperative is highly regarded for their cherry selection and processing. <br> <br> We are absolutely thrilled to add this coffee to our lineup! If you had the opportunity to try our offering on the Banko Gotiti Set, then you know how delicious this coffee is. The dry fragrance is like dehydrated fruit candy and as a brewed drink, it is clean, sweet with a little body making for a wonderful mouthfeel and overall experience.",
            price: "22.00",
            img: "https://images.squarespace-cdn.com/content/v1/5b35406150a54fbd72663d20/1596233038310-4YV7Y4BZ14DXQZ58IXO0/BANKO+GOTITI.JPG?format=1500w",
            url: "https://www.weatheredhandscoffee.com/coffee/ethiopia-banko-gotiti",
        }, {
            name: "The Farmstead",
            origin: "Colombia, Brazil, El Salvador",
            singleOrigin: "Blend",
            process: "Washed/Natural",
            elevation: "",
            flavorProfile: "Milk Chocolate, Caramel, Macadamia, Marshmellow",
            story: "The Farmstead is our flagship blend. It is meant to be comforting like warm soup or mom's homemade food. As the seasons change, we also make changes to the blend while still maintaining approachability and complexity.",
            price: "18.00",
            img: "https://images.squarespace-cdn.com/content/v1/5b35406150a54fbd72663d20/1645718794714-PQWNBTJX4GVIKA40AQEZ/Blend.jpg?format=750w",
            url: "https://weatheredhandscoffee.com/coffee/the-farmstead",
        }, {
            name: "Kainamui",
            origin: "Kenya",
            singleOrigin: "Single Origin",
            process: "Washed",
            elevation: "1650m",
            flavorProfile: "Black Current, Grapefruit, and Molasses",
            story: "Kainamui Coffee Factory was established on the slopes of Mount Kenya in 1963 and is part of the New Ngariama Cooperative. It is situated in the Ngariama location, Gichugu division of Kirinyaga County. With ideal conditions for coffee growing, farmers benefit from the mineral-rich, red volcanic loam soils and an elevation of 1650 meters above sea level." + 
            "<br><br>" + "The factory has partnered with Coffee Management Services (CMS), for its agronomical ventures. The long term goal is to increase coffee production through farmer training, ready access to inputs, Good Agricultural Practice seminars, and providing updated printed materials on sustainable farming." +
            "<br><br>" + "Most coffee producers in Kenya are 'smallholders'. Each producer's total volume might only be a few bags, thus hundreds of farmers, when living in the same area, are likely to be members of a cooperative, which markets and sells coffee on the whole community’s behalf. Each cooperative typically runs several “factories” (i.e. processing and washing stations) where producers deliver cherries from their farms. Sometimes a producer chooses to deliver to the closest factory but some prefer delivering to a different factory, due to differing management practices. The usual reason for choosing one factory over another is based on the prices a given factory manages to obtain for its cherries." +
            "<br><br>" + " This lot is of grade AA, which is of screen size 17+. If you're a fan of acidity, this coffee is up your alley. Kenyans are known for their sparkling acidity, explosive aromas and lingering aftertaste and this coffee is true to it’s origin, which makes this coffee shine in your cup!",
            price: "19.00",
            img: "https://images.squarespace-cdn.com/content/v1/5b35406150a54fbd72663d20/1618078117887-EFZ13FW2EFI528J6E37G/Giraldo+-+5.jpeg?format=750w",
            url: "https://www.weatheredhandscoffee.com/coffee/guatemala-bella-carmona",
        }, {
            name: "Marilandia SWP Decaf",
            origin: "Guatemala",
            singleOrigin: "Single Origin",
            process: "Decaf",
            elevation: "1650m",
            flavorProfile: "Chocolate, Caramel, Stone fruit",
            story: "José Bernabé Martínez is a first generation coffee producer, from a large family of farmers cultivating other crops. In fact, he himself grows lemons, bananas, oranges, and avocados on the farm. Hovering around a very spry eighty years old, he manages his steep ridgeline farm with the support of his son José Martinez. <br> <br> When his mother died in 1980, he inherited a bit of land and began planting coffee himself. Over many years as prices improved, he turned profits to purchasing neighboring lots. He has had the pride of teaching his children everything he knows about coffee and farming, and they now support the harvest.",
            price: "16.00",
            img: "https://images.squarespace-cdn.com/content/v1/5b35406150a54fbd72663d20/1629838569344-S8ICKMES3X16WNRL1DOH/6A914E74-7031-41D3-A935-3197F554C9C0_1_201_a.jpeg?format=1500w",
            url: "https://www.weatheredhandscoffee.com/coffee/guatemala-marilandia-swp-decaf",
        }];

        //If user drinks decaf, suggestion = decaf coffee

        if (a2 == "5") {

            let activeCoffee = coffee[3];
            $("[successMSG=coffeeName]").replaceWith(activeCoffee.name);
            $("#successOrigin").replaceWith(activeCoffee.origin);
            $("#successElevation").replaceWith(activeCoffee.elevation);
            $("#successFlavorProfile").replaceWith(activeCoffee.flavorProfile);
            $("#successPrice").replaceWith(activeCoffee.price);
            $("#successStory").replaceWith("<p class='story'>" + activeCoffee.story + "</p>");
            $("#successIMG").attr("src", activeCoffee.img);
            $("#successURL").attr("href", activeCoffee.url);
            $("#userName").replaceWith(name);
        } else {
            if (score >= 30 && score <= 54) {

            let activeCoffee = coffee[2];
            $("[successMSG=coffeeName]").replaceWith(activeCoffee.name);
            $("#successOrigin").replaceWith(activeCoffee.origin);
            $("#successElevation").replaceWith(activeCoffee.elevation);
            $("#successFlavorProfile").replaceWith(activeCoffee.flavorProfile);
            $("#successPrice").replaceWith(activeCoffee.price);
            $("#successStory").replaceWith("<p class='story'>" + activeCoffee.story + "</p>");
            $("#successIMG").attr("src", activeCoffee.img);
            $("#successURL").attr("href", activeCoffee.url);
            $("#userName").replaceWith(name);
            }

            if (score >= 55 && score <= 77) {

            let activeCoffee = coffee[1];
            $("[successMSG=coffeeName]").replaceWith(activeCoffee.name);
            $("#successOrigin").replaceWith(activeCoffee.origin);
            $("#successElevation").replaceWith(activeCoffee.elevation);
            $("#successFlavorProfile").replaceWith(activeCoffee.flavorProfile);
            $("#successPrice").replaceWith(activeCoffee.price);
            $("#successStory").replaceWith("<p class='story'>" + activeCoffee.story + "</p>");
            $("#successIMG").attr("src", activeCoffee.img);
            $("#successURL").attr("href", activeCoffee.url);
            $("#userName").replaceWith(name);
            }

            if (score >= 78 && score <= 100) {

            let activeCoffee = coffee[0];
            $("[successMSG=coffeeName]").replaceWith(activeCoffee.name);
            $("#successOrigin").replaceWith(activeCoffee.origin);
            $("#successElevation").replaceWith(activeCoffee.elevation);
            $("#successFlavorProfile").replaceWith(activeCoffee.flavorProfile);
            $("#successPrice").replaceWith(activeCoffee.price);
            $("#successStory").replaceWith("<p class='story'>" + activeCoffee.story + "</p>");
            $("#successIMG").attr("src", activeCoffee.img);
            $("#successURL").attr("href", activeCoffee.url);
            $("#userName").replaceWith(name);
            }
        }
})