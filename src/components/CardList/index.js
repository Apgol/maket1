import './style.css';

export default function CardList(props) {

  const changeSortFunction = (sort) => {
    switch(sort) {
      case 'unset':
        return (a, b) => true
      case 'newFisrt':
        return (a, b) => new Date(b.date) - new Date(a.date)
      case 'oldFirst':
        return (a, b) => new Date(a.date) - new Date(b.date)
    }
  }
  
  
  return (
    <div className="card-list" >
      
      {props.cardData
      .filter(item => item.text.toLowerCase().indexOf(props.searchField.toLowerCase()) !== -1)
      .sort(changeSortFunction(props.dateFilter))
      .filter(item => {
        if (props.categoryFilter === "unset") 
          return true
        return item.category === props.categoryFilter
      })
      .map(item => (
        <div className="card-list__item" key={item.id}>
          <img className="card-list__img" src={item.img}></img>
          <div className="card-list__content">
            <span className="card-list__text">{item.text}</span>
            <span className="card-list__date">{item.date}</span>
            <span className="card-list__category">{item.category}</span> 
          </div>
        </div>
      )
      )}
    </div>
  )
}