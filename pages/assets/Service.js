import React , { useState } from 'react';
import { Card } from "react-native-elements";

export function Alinhamento(){
    return(
        <Card>
            <Card.Title>ALINHAMENTO</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: 'https://w7.pngwing.com/pngs/628/334/png-transparent-car-door-wheel-alignment-tire-car-compact-car-van-service.png'}} resizeMode="contain" />
        </Card>   
    );
}
export function TrocaOleo(){
    return(
        <Card>
            <Card.Title>TROCA DE ÓLEO</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: 'https://img2.gratispng.com/20180227/qye/kisspng-car-motor-oil-lubricant-synthetic-oil-nail-polish-5a95df90e0af26.2839658515197715369203.jpg'}} resizeMode="contain" />
        </Card>    
    );
}
export function Balanceamento(){
    return(
        <Card>
            <Card.Title>BALANCEAMENTO</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: 'https://img2.gratispng.com/20180511/fue/kisspng-balancing-machine-car-russia-stanok-tire-balance-5af52728e4a216.3820886415260157849365.jpg'}} resizeMode="contain" />
        </Card>  
    );
}
export function Revisao(){
    return(
        <Card>
            <Card.Title>REVISÃO</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: 'https://www.agramax.com.br/wp-content/uploads/2022/02/Portaria-Detran-420x320.png'}} resizeMode="contain" />
        </Card>  
    );
}