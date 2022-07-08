const getTrending = async () => {
    
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=sGSXWO76o5UJPYEhco6UHoi78SyNghuq`;
    const resp = await fetch(url);
    //console.log(resp);
    const { data } = await resp.json();
    //console.log(data);

    const trending = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
    }));

    console.log(trending);
    return trending;
}

export default getTrending;