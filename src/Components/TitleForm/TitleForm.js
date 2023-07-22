import './TitleForm.css'

const TitleForm = ({onInputChange, onButtonChange}) => {
    return(
        <div className='center-block'>
            <input className = "f4 pa2 w-30 center" type="text" onChange = {onInputChange} />
            <button className = 'w-6 grow f4 link ph3 pv2 dib white bg-light-purple' onClick = {onButtonChange}>
                클릭
            </button>
        </div>
    )
};


export default TitleForm;