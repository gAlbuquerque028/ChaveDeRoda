import React , { useState } from 'react';
import { View } from 'react-native';
import { Card } from "react-native-paper";

export function Carro(){
    return(
        <Card>
            <Card.Title title = "Carro"/>
            <Card.Cover source={{uri:'https://static.vecteezy.com/system/resources/previews/001/193/785/non_2x/car-png.png'}}/>
        </Card>   
    );
}
export function Moto(){
    return(
        <Card>
            <Card.Title title = "Moto"/>
            <Card.Cover source={{uri:'https://w7.pngwing.com/pngs/899/792/png-transparent-silhouette-of-sports-bike-car-motorcycle-computer-icons-traction-control-system-auto-detailing-motorcycles-logo-bicycle-monochrome.png'}}/>
        </Card>   
    );
}
export function Caminhao(){
    return(
        <Card>
            <Card.Title title = "Caminhão"/>
            <Card.Cover source={{uri:'https://img1.gratispng.com/20180330/ztw/kisspng-pickup-truck-semi-trailer-truck-clip-art-trucks-5abde842d89235.5653247615223952028871.jpg'}}/>
        </Card>
    );
}
export function Outros(){
    return(
        <Card>
            <Card.Title title = "Outros"/>
            <Card.Cover source={{uri:'https://w7.pngwing.com/pngs/6/527/png-transparent-dots-computer-icons-ellipsis-to-be-continued-text-rectangle-monochrome.png'}}/>
        </Card>
    );
}