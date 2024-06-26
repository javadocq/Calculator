import '../Screen.css';

export default function Screen(props) {
    return (
        <>
            {!props.clear ? 
                <div className='screen'>
                    {props.result ? props.result : props.screen}
                </div>
                : 
                <div className='screen'>

                </div>
            }
        </>
    );
}