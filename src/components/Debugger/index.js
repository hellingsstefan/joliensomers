import classes from './Debugger.module.scss';

function Debugger(props) {
    return (
        <div className={classes.debugger}>
            {props.children}
        </div>
     );
}

export default Debugger;
