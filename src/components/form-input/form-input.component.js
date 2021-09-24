import './form-input.styles.scss'

const formInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps}/>
        {
            label ?
           ( <label className={`${otherProps.value.lenght ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>
)
export default formInput;