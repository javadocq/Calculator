import '../Screen.css';

export default function Screen(props) {
    return (
        
        <div className='screen'>
            {props.result ? props.result : props.screen}
        </div>
    );
}