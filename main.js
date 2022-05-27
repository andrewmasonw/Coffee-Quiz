$("#submitButton").click(()=>{
    // Find the users name
        let name = $("#yourName").val();
        let nameInt = name.length;
        console.log(name)

        if (nameInt === 0) {
            alert("Please enter a name") //Name Validation
            return true;
        }

        let a1 = parseInt($('input[name = "method"]:checked').val());
        let a2 = parseInt($('input[name = "how"]:checked').val());
        let a3 = parseInt($('select[name = "cups"]').val());
        let a4 = parseInt($('input[name = "light-dark"]:checked').val());
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
            story: "The Banko Gotiti Cooperative is located in the village of Banko Gotiti in the district of Gedeb of the Gedeo Zone, Ethiopia. With approximately 300 smallholder members, Banko Gotiti was established in 2012. Most of the smallholders are either growing coffee in semi-forest conditions where coffee is growing naturally in the forest and are tended on or in garden conditions where smallholders cultivate coffee near their homes. As a result of high standards and expectations, the cooperative is highly regarded for their cherry selection and processing. <br> We are absolutely thrilled to add this coffee to our lineup! If you had the opportunity to try our offering on the Banko Gotiti Set, then you know how delicious this coffee is. The dry fragrance is like dehydrated fruit candy and as a brewed drink, it is clean, sweet with a little body making for a wonderful mouthfeel and overall experience.",
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
            name: "La Sierrita",
            origin: "Antioquia, Columbia",
            singleOrigin: "Single Origin",
            process: "Washed & Greenhouse Dried",
            elevation: "2000m",
            flavorProfile: "Tangarine, Plum, Nougat",
            story: "La Sierrita is comprised of lots from multiple producers in Giraldo, Antioquia, Colombia. The producers who contributed to this lot grow Caturra, Colombia, and Castillo. This communal lot is carefully constructed, with every single small lot individually cupped various times before being included within the main lot. In addition to cup quality, each coffee must meet strict physical requirements, including guidelines for moisture content and water activity. <br> Antioquia is the 2nd largest producer of coffee in Colombia, next to Huila, but many would never know it as it doesn’t have the same fame as other regions such as Huila, Nariño or Cauca. The reason is because it is primarily comprised of large-scale farmers who are focused more on volumes than on quality. However, there are a few regions within the state where small holders produce coffees that can easily compete on the cupping table, next to any other region in Colombia. Giraldo is one of those under appreciated regions!",
            price: "19.00",
            img: "https://images.squarespace-cdn.com/content/v1/5b35406150a54fbd72663d20/1618078117887-EFZ13FW2EFI528J6E37G/Giraldo+-+5.jpeg?format=750w",
            url: "https://www.weatheredhandscoffee.com/coffee/guatemala-bella-carmona",
        }, {
            name: "Las Montanas EA Decaf",
            origin: "Colombia",
            singleOrigin: "Single Origin",
            process: "Decaf",
            elevation: "",
            flavorProfile: "Milk Chocolate, Almond, Brown Sugar",
            story: "The Sugarcane EA Decaffeination Process removes 97% of all caffeine originally present within green coffee.  Ethyl Acetate (EA) is a naturally occuring compound and solvent derived through the fermentation of sugarcane.  ",
            price: "16.00",
            img: "https://images.squarespace-cdn.com/content/v1/5b35406150a54fbd72663d20/1564544180200-1N46YKZ4U1JBW4IRGTLI/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/_MG_3931.jpg?format=1000w",
            url: "https://www.weatheredhandscoffee.com/coffee/las-montanas-ea-decaf",
        }];

        //If user drinks decaf, suggestion = decaf coffee

        if (a2 == "5") {

            //hide quiz
            $("#form").css("display", "none");
            //show success msg
            $("#successContainer").css("display", "block");

            let activeCoffee = coffee[3];
            $("#successName").replaceWith(activeCoffee.name);
            $("#successOrigin").replaceWith(activeCoffee.origin);
            $("#successElevation").replaceWith(activeCoffee.elevation);
            $("#successFlavorProfile").replaceWith(activeCoffee.flavorProfile);
            $("#successPrice").replaceWith(activeCoffee.price);
            $("#successStory").replaceWith(activeCoffee.story);
            $("#successIMG").attr("src", activeCoffee.img);
            $("#successURL").attr("href", activeCoffee.url);

            //success greeting
            //document.getElementById("name").innerHTML = "Thanks for taking our quiz, " + name + "!";
            $("#userName").replaceWith(name);
            document.getElementById("success-heading").innerHTML = "We thought that " + activeCoffee.name + " from Weathered Hands Farmhouse Coffee would be best for you.";
            $("#success-heading").replaceWith(activeCoffee.name);
        } else {
            if (score >= 31 && score <= 54) {
                //hide quiz
            $("#form").css("display", "none");
            //show success msg
            $("#successContainer").css("display", "block");

            let activeCoffee = coffee[2];
            $("#successName").replaceWith(activeCoffee.name);
            $("#successOrigin").replaceWith(activeCoffee.origin);
            $("#successElevation").replaceWith(activeCoffee.elevation);
            $("#successFlavorProfile").replaceWith(activeCoffee.flavorProfile);
            $("#successPrice").replaceWith(activeCoffee.price);
            $("#successStory").replaceWith(activeCoffee.story);
            $("#successIMG").attr("src", activeCoffee.img);
            $("#successURL").attr("href", activeCoffee.url);

            //success greeting
            //document.getElementById("name").innerHTML = "Thanks for taking our quiz, " + name + "!";
            $("#userName").replaceWith(name);
            document.getElementById("success-heading").innerHTML = "We thought that " + activeCoffee.name + " from Weathered Hands Farmhouse Coffee would be best for you.";
            $("#success-heading").replaceWith(activeCoffee.name);
            }

            if (score >= 55 && score <= 77) {
               //hide quiz
            $("#form").css("display", "none");
            //show success msg
            $("#successContainer").css("display", "block");

            let activeCoffee = coffee[1];
            $("#successName").replaceWith(activeCoffee.name);
            $("#successOrigin").replaceWith(activeCoffee.origin);
            $("#successElevation").replaceWith(activeCoffee.elevation);
            $("#successFlavorProfile").replaceWith(activeCoffee.flavorProfile);
            $("#successPrice").replaceWith(activeCoffee.price);
            $("#successStory").replaceWith(activeCoffee.story);
            $("#successIMG").attr("src", activeCoffee.img);
            $("#successURL").attr("href", activeCoffee.url);

            //success greeting
            //document.getElementById("name").innerHTML = "Thanks for taking our quiz, " + name + "!";
            $("#userName").replaceWith(name);
            document.getElementById("success-heading").innerHTML = "We thought that " + activeCoffee.name + " from Weathered Hands Farmhouse Coffee would be best for you.";
            $("#success-heading").replaceWith(activeCoffee.name);
            }

            if (score >= 78 && score <= 100) {

                //hide quiz
            $("#form").css("display", "none");
            //show success msg
            $("#successContainer").css("display", "block");

            let activeCoffee = coffee[0];
            $("#successName").replaceWith(activeCoffee.name);
            $("#successOrigin").replaceWith(activeCoffee.origin);
            $("#successElevation").replaceWith(activeCoffee.elevation);
            $("#successFlavorProfile").replaceWith(activeCoffee.flavorProfile);
            $("#successPrice").replaceWith(activeCoffee.price);
            $("#successStory").replaceWith(activeCoffee.story);
            $("#successIMG").attr("src", activeCoffee.img);
            $("#successURL").attr("href", activeCoffee.url);

            //success greeting
            //document.getElementById("name").innerHTML = "Thanks for taking our quiz, " + name + "!";
            $("#userName").replaceWith(name);
            document.getElementById("success-heading").innerHTML = "We thought that " + activeCoffee.name + " from Weathered Hands Farmhouse Coffee would be best for you.";
            $("#success-heading").replaceWith(activeCoffee.name);
            }
        }

        return false // Needed so page will not refresh on submit
})