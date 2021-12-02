import styles from './Debugger.module.scss';

function Debugger(props) {
    return (
        <div className={styles.debugger}>
            {props.children}
        </div>
     );
}

export default Debugger;
