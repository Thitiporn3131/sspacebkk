import React from 'react'
import SectionHeading from './SectionHeading/SectionHeading';
import Card from '../Card/Card'
import cropShirt from '../../assets/img/ribbonShirt.jpg'
import Skirt from '../../assets/img/90vSkirt.jpg'
import pearl from '../../assets/img/pearl.jpg'
import blossomDress from '../../assets/img/pinkBlossomDress.jpg'
import Carousel from 'react-multi-carousel';
import { responsive } from '../../utils/Section.constants';
import bbSummer from '../../assets/img/babyblueSummerDress.jpg'
import dyPink from '../../assets/img/douyinPink.jpg'
import ellePink from '../../assets/img/elleCropPink.jpg'
import fbCrop from '../../assets/img/flowerBloomCrop.jpg'
import perfectJ from '../../assets/img/perfectJ.jpg'
import summerCrop from '../../assets/img/summerCrop2025.jpg'
import whiteRose from '../../assets/img/whiteRosesDress.jpg'


const items = [{
    'title' : 'Ribbon Crop Shirt',
    'imgPath' : cropShirt
},{
    'title' : 'Skirt 90s',
    'imgPath' : Skirt
},{
    'title' : 'Pearl necklact',
    'imgPath' : pearl
},{
    'title' : 'Pink Blossom Dress',
    'imgPath' : blossomDress
},
{
    'title' : 'Baby blue Summer Dress',
    'imgPath' : bbSummer
},{
    'title' : 'Douyin pink',
    'imgPath' : dyPink
},{
    'title' : 'Elle Crop #BabyPink',
    'imgPath' : ellePink
},{
    'title' : 'Flora Bloom #Crop',
    'imgPath' : fbCrop
},{
    'title' : 'Perfect J',
    'imgPath' : perfectJ
},{
    'title' : 'Summer crop#2025',
    'imgPath' : summerCrop
},{
    'title' : 'White rose mini dress',
    'imgPath' : whiteRose
}]
const JustIn = () => {
    return(
        <>
        <SectionHeading title={'Just In'}/>
        <Carousel 
            responsive={responsive}
            autoPlay={false}
            swipeable={true}
            draggable={false}
            showDots={false}
            infinite={false}
            partialVisible={false}
            itemClass={'react-slider-custom-tem'}
            className='px-8'>
            {items && items?.map((item,index)=> <Card key={item?.title + index} title={item.title} imgPath={item.imgPath} />)}
        </Carousel>
        </>
    );
}
export default JustIn