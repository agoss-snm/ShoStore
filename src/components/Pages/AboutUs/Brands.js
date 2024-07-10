import * as React from 'react';
//material
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
// style
import './Brand.css'

export default function Brands(){

  const itemData = [
    {
      img: 'https://cdn.britannica.com/50/213250-050-02322AA8/Nike-logo.jpg',
      title: 'Nike',
      author: '@JustDoIt',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://www.brand-experts.com/wp-content/uploads/Adidas-Brand-Distribution-Strategy-photo-brand-pilots.png',
      title: 'Adidas',
      author: '@AdidasOriginal',
    },
    {
      img: 'https://media.architecturaldigest.com/photos/57a11cbeb6c434ab487bc26b/4:3/w_1032,h_774,c_limit/nikes-senior-designer-explains-what-went-into-new-air-jordan-01.png',
      title: 'Jordan',
      author: '@AirJordan',
    },
    {
      img: 'https://media.sivasdescalzo.com/media/wysiwyg/2018/08AGOSTO/Blog/historia-converse/converse-no-skid.jpg',
      title: 'Converse',
      author: '@TheStreetIsOuer',
      cols: 2,
    },
    {
      img: 'https://udg-about-puma-prod-endpoint.azureedge.net/-/media/images/this-is-puma/history/m-18_2004_ferrari.jpg?as=1&h=300&iar=1&w=400&rev=ad5dbc6be85d494cb4485c051536c00f&hash=4C2FA1D204EF16E9B4C5459A6BB6CCC9',
      title: 'Puma',
      author: '@Puma365',
      cols: 2,
    },
    {
      img: 'https://assets.reebok.com/images/w_600,f_auto,q_auto/63a675c1a90d47968cb3abe60166ae6e_9366/T-shirt_Training_Essentials_Tape_Noir_GQ4205_05_detail.jpg',
      title: 'Rebook',
      author: '@RebookMarks',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://i0.wp.com/matchtenis.com/wp-content/uploads/2020/09/2Z1A2355-Bruno.jpg?fit=700%2C467&ssl=1',
      title: 'Babolat',
      author: '@HawBBlat',
    },
    {
      img: 'https://blog.sneakerjagers.com/wp-content/uploads/2021/06/AsicsHistoryGelLyte.jpg',
      title: 'Oasic',
      author: '@katie_oasic',
    },
    {
      img: 'https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw2106df2a/images/inside-nb/nb-overview/NBO_Comp_R2_Image2.jpg',
      title: 'NewBalance',
      author: '@NB',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://i.pinimg.com/736x/a3/34/6d/a3346dc549a59cea348f72f72db98940.jpg',
      title: 'Mizuno',
      author: '@mzn',
    },
    
  ];

    return (
      <div className='container'>
        <ImageList id='containerlist'>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div" id='WWmarks'>We work with the best brands! </ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
        </div>
      );
    }
    
 