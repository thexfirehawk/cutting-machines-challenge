const MachineCard = ({props, id}) => {

    return (
      <div className='card machine-card'>
        <span className='machine-card__title'>#{id}</span>
        <div>
            <p>
                <span className='machine-card__subtitle'>Id: </span>
                <span className='machine-card__id'>{props.id}</span>
            </p>
            <p>
            <span className='machine-card__subtitle'>Manufacturer: </span>
            <span className='machine-card__manufacturer'>{props.manufacturer}</span>
            </p>
        </div>
      </div>
    );
}

export default MachineCard;