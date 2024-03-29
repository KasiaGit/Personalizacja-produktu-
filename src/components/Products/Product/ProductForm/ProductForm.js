import OptionSize from "./OptionSize/OptionSize";
import OptionColor from "./OptionColor/OptionColor";
import Button from "./Button/Button";
import styles from './ProductForm.module.scss';

const ProductForm = props => {
    return(
      <form onSubmit={props.handleCart}>
          <OptionSize sizeArr={props.sizeArr} handleActiveSize={props.handleActiveSize} activeSize={props.activeSize}/>
          <OptionColor colors={props.colors} handleActiveColor={props.handleActiveColor} activeColor={props.activeColor}/>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart"/>
          </Button>
        </form>
    );
}

export default ProductForm;