function updateMap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases>255){
                    color = "rgb(255,0,0)";
                }
                else{
                    color = `rgb(${cases},0,0)`
                }
                //Mark on map
                const marker = new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude , latitude])
                    .addTo(map);
            });
        })
}

updateMap();