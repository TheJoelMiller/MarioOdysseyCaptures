const accordion = document.getElementsByClassName('container');
for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('.cards img')) return;
    
    // Don't follow the link
    event.preventDefault();
    
    // Log the clicked element in the console
    console.log(event.target.id);
    console.log(captureData[event.target.id].locations);
    document.getElementById("capture-info").innerHTML =  captureData[event.target.id].name ;
    
    }, false);

const captureData = [
    {
        name: 'Frog', 
        locations: 'Cap Kingdom, Lake Kingdom, Moon Kingdom, Darker Side',
    },
    {
        name: 'Spark Pylon', 
        locations: 'Cap Kingdom, Cascade Kingdom, Sand Kingdom, Metro Kingdom, Ruined Kingdom, Bowsers Kingdom, Moon Kingdom, Dark Side, Darker Side',
    },
    {
        name: 'Paragoomba', 
        locations: 'Cap Kingdom, Wooded Kingdom',
    },
    {
        name: 'Chain Chomp', 
        locations: 'Cascade Kingdom',
    },
    {
        name: 'Big Chain Chomp', 
        locations: 'Cascade Kingdom',
    },
    {
        name: 'Broode\'s Chain Chomp', 
        locations: 'Cascade Kingdom, Moon Kingdom',
    },
    {
        name: 'T-Rex', 
        locations: 'Cascade Kingdom, Wooded Kingdom, Metro Kingdom',
    },
    {
        name: 'Binoculars', 
        locations: 'Mushroom Kingdom, Cap Kingdom, Sand Kingdom, Wooded Kingdom, Lake Kingdom, Lost Kingdom, Metro Kingdom, Seaside Kingdom, Luncheon Kingdom, Bowsers Kingdom, Moon Kingdom, Dark Side, Darker Side',
    },
    {
        name: 'Bullet Bill', 
        locations: 'Sand Kingdom, Wooded Kingdom, Metro Kingdom, Moon Kingdom, Dark Side',
    },
    {
        name: 'Moe-Eye', 
        locations: 'Sand Kingdom, Moon Kingdom',
    },
    {
        name: 'Cactus', 
        locations: 'Sand Kingdom',
    },
    {
        name: 'Goomba', 
        locations: 'Mushroom Kingdom, Sand Kingdom, Wooded Kingdom, Lake Kingdom, Metro Kingdom, Snow Kingdom, Seaside Kingdom, Luncheon Kingdom, Bowsers Kingdom, Darker Side',
    },
    {
        name: 'Knucklotec\'s Fist', 
        locations: 'Sand Kingdom',
    },
        {
        name: 'Mini Rocket', 
        locations: 'Mushroom Kingdom, Sand Kingdom, Wooded Kingdom, Seaside Kingdom, Ruined Kingdom,',
    },
    {
        name: 'Glydon', 
        locations: 'Sand Kingdom, Wooded Kingdom, Lost Kingdom, Seaside Kingdom, Darker Side',
    },
    {
        name: 'Lakitu', 
        locations: 'Sand Kingdom, Lake Kingdom, Snow Kingdom, Bowsers Kingdom',
    },
    {
        name: 'Zipper', 
        locations: 'Lake Kingdom',
    },
    {
        name: 'Cheep Cheep', 
        locations: 'Lake Kingdom, Seaside Kingdom',
    },
    {
        name: 'Puzzle Part (Lake Kingdom)', 
        locations: 'Lake Kingdom',
    },
    {
        name: 'Poison Pirahna Plant', 
        locations: 'Wooded Kingdom, Metro Kingdom, Dark Side',
    },
    {
        name: 'Uproot', 
        locations: 'Mushroom Kingdom, Wooded Kingdom, Seaside Kingdom, Darker Side',
    },
    {
        name: 'Fire Bro', 
        locations: 'Wooded Kingdom, Luncheon Kingdom',
    },
    {
        name: 'Sherm', 
        locations: 'Mushroom Kingdom, Wooded Kingdom, Metro Kingdom, Moon Kingdom',
    },
    {
        name: 'Coin Coffer', 
        locations: 'Sand Kingdom, Wooded Kingdom',
    },
    {
        name: 'Tree', 
        locations: 'Wooded Kingdom',
    },
    {
        name: 'Boulder', 
        locations: 'Wooded Kingdom',
    },
    {
        name: 'Picture Match Part (Goomba)', 
        locations: 'Cloud Kingdom',
    },
    {
        name: 'Tropical Wiggler', 
        locations: 'Lost Kingdom, Moon Kingdom',
    },
    {
        name: 'Pole', 
        locations: 'Metro Kingdom',
    },
    {
        name: 'Manhole', 
        locations: 'Metro Kingdom',
    },
    {
        name: 'Taxi', 
        locations: 'Metro Kingdom',
    },
    {
        name: 'RC Car', 
        locations: 'Metro Kingdom',
    },
    {
        name: 'Ty-Foo', 
        locations: 'Snow Kingdom',
    },
    {
        name: 'Shiverian Racer', 
        locations: 'Snow Kingdom',
    },
    {
        name: 'Cheep Cheep (Snow Kingdom)', 
        locations: 'Snow Kingdom',
    },
    {
        name: 'Gushen', 
        locations: 'Mushroom Kingdom, Sand Kingdom, Seaside Kingdom',
    },
    {
        name: 'Lava Bubble', 
        locations: 'Mushroom Kingdom, Lost Kingdom, Luncheon Kingdom, Darker Side',
    },
    {
        name: 'Volbonan', 
        locations: 'Mushroom Kingdom, Metro Kingdom, Seaside Kingdom, Luncheon Kingdom, Darker Side',
    },
    {
        name: 'Hammer Bro', 
        locations: 'Metro Kingdom, Luncheon Kingdom, Moon Kingdom, Dark Side',
    },
    {
        name: 'Meat', 
        locations: 'Luncheon Kingdom',
    },
    {
        name: 'Fire Pirahna Plant', 
        locations: 'Lost Kingdom, Metro Kingdom, Luncheon Kingdom, Dark Side',
    },
    {
        name: 'Pokio', 
        locations: 'Seaside Kingdom, Bowsers Kingdom',
    },
    {
        name: 'Jizo', 
        locations: 'Bowsers Kingdom',
    },
    {
        name: 'Bowser Statue', 
        locations: 'Moon Kingdom',
    },
    {
        name: 'Parabones', 
        locations: 'Bowsers Kingdom, Moon Kingdom',
    },
    {
        name: 'Banzai Bill', 
        locations: 'Wooded Kingdom, Snow Kingdom, Moon Kingdom, Dark Side',
    },
    {
        name: 'Chargin\' Chuck', 
        locations: 'Ruined Kingdom, Moon Kingdom',
    },
    {
        name: 'Bowser', 
        locations: 'Moon Kindom, Darker Side',
    },
    {
        name: 'Letter', 
        locations: 'Metro Kingdom',
    },
    {
        name: 'Puzzle Part (Metro Kingdom)', 
        locations: 'Metro Kingdom',
    },
    {
        name: 'Picture Match Part (Mario)', 
        locations: 'Mushroom Kingdom',
    },
    {
        name: 'Yoshi', 
        locations: 'Mushroom Kingdom, Dark Side, Darker Side',
    },
    ]