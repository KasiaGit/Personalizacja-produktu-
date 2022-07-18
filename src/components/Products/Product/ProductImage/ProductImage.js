import styles from './ProductImage.module.scss';

const ProductImage = props => {

    return(
        <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.name + ' shirt'}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.colors[props.activeColor]}.jpg`} />
      </div>
    )
}

export default ProductImage;