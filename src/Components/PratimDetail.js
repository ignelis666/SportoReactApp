import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const PratimDetail = ({record}) =>{
    const {pratimas,paveikslelis} = record;
    return (
        <Card>
            <CardSection>
                <View>
                    <Image 
                    
                    source={{uri : paveikslelis}} 
                    />
                    </View >
                    <View style={style.headerContentStyle}>
                    <Text style={headerTextStyle}>{pratimas}</Text>
                    </View>
            </CardSection>
            <CardSection>
                <Image 
                style ={imageStyle}
                source={{uri: image}} />
            </CardSection>

            <CardSection>
                <Button buttonIsPress={() => console.log(pratimas) }>
                    Perjungt   
                </Button>
            </CardSection>

        </Card>
    )
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }

}

export default PratimDetail;