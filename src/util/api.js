export async function getPlayers() {
  const players = await fetch('https://player-fashion-default-rtdb.firebaseio.com/players.json');

  if (!players.ok) {
    throw new Response('Failed to fetch players', { status: 500 });
  }

  const playerResponseData = await players.json();
  const playerData = [];

  for (const key in playerResponseData) {
    playerData.push({
      id: key,
      name: playerResponseData[key].name,
      league: playerResponseData[key].league,
      image: playerResponseData[key].image
    });
  }

  return playerData;
}

export async function savePlayer(data) {
    const player = {
      name: data.name,
      league: data.league,
      image: data.image
    };
  
    // if (post.title.trim().length < 5 || post.body.trim().length < 10) {
    //   return { isError: true, message: 'Invalid input data provided.' };
    // }
  
    const response = await fetch('https://player-fashion-default-rtdb.firebaseio.com/players.json', {
      method: 'POST',
      body: JSON.stringify(player),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      throw response;
    }
    
  }

  export async function getRatings(playerName) {
    const response = await fetch('https://player-fashion-default-rtdb.firebaseio.com/ratings.json');
    if (!response.ok) {
      throw new Response('Failed to fetch posts.', { status: 500 });
    }
    const responseData = await response.json();
    const playerRatingData = [];

    for (const key in responseData) {
        if (responseData[key].name === playerName) {
            playerRatingData.push(responseData[key].rating);
        }
    }
    const rating = playerRatingData.length === 0 ? 'No ratings yet' : (playerRatingData.reduce((pv, cv) => pv + cv, 0)/playerRatingData.length).toFixed(2);
    return rating;
  }


  export async function saveRating(data) {
    console.log(data)
    console.log(typeof(data.rating))

    const rating = {
      name: data.name,
      rating: data.rating,
    };

    // const currentRatings = await fetch('https://player-fashion-default-rtdb.firebaseio.com/ratings.json');
  
    // if (post.title.trim().length < 5 || post.body.trim().length < 10) {
    //   return { isError: true, message: 'Invalid input data provided.' };
    // }
  
    const response = await fetch('https://player-fashion-default-rtdb.firebaseio.com/ratings.json', {
      method: 'POST',
      body: JSON.stringify(rating),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      throw response;
    }

    const playerRating = await getRatings(data.name);
    console.log(playerRating)
    return playerRating;
  }