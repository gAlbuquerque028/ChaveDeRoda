import React , { useState } from 'react';
import { Card } from "react-native-elements";

export function Carro(){
    return(
        <Card>
            <Card.Title>CARRO</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: 'https://w7.pngwing.com/pngs/511/801/png-transparent-sports-car-silhouette-car-compact-car-monochrome-car.png'}} resizeMode="contain" />
        </Card>   
    );
}
export function Moto(){
    return(
        <Card>
            <Card.Title>MOTO</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: 'https://w7.pngwing.com/pngs/899/792/png-transparent-silhouette-of-sports-bike-car-motorcycle-computer-icons-traction-control-system-auto-detailing-motorcycles-logo-bicycle-monochrome.png'}} resizeMode="contain" />
        </Card>    
    );
}
export function Caminhao(){
    return(
        <Card>
            <Card.Title>CAMINHÃO</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: 'https://img1.gratispng.com/20180330/ztw/kisspng-pickup-truck-semi-trailer-truck-clip-art-trucks-5abde842d89235.5653247615223952028871.jpg'}} resizeMode="contain" />
        </Card>  
    );
}
export function Van(){
    return(
        <Card>
            <Card.Title>VAN</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: 'https://static.wixstatic.com/media/a3fe12_859158f8fc104457950004c7eb082d94~mv2.png/v1/crop/x_850,y_561,w_2191,h_1469/fill/w_452,h_302,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sprinter%20passageiro.png'}} resizeMode="contain" />
        </Card>  
    );
}