import CardList from '../../components/CardList'
import Carusel from '../../components/Carusel'
import { useState } from 'react'
import '../../style/css/main.css';

function MainPages() {
 
  const [search, setSearch] = useState('')
  const [dateFilter, setDateFilter] = useState('unset')
  const [categoryFilter, setCategoryFilter] = useState('unset')

  const cardData = [
    {
      id: 0,
      img: "/img/img-example.jpg",
      text: "John lorem ipsum",
      date: "01-10-2021",
      category: "A"       
    },
    {
      id: 1,
      img: "/img/img-example2.jpg",
      text: "Cena lorem ipsum",
      date: "05-10-2021",
      category: "A" 
    },
    {
      id: 2,
      img: "/img/img-example2.jpg",
      text: "Vitalik lorem ipsum",
      date: "05-10-2021",
      category: "B"
    },
    {
      id: 3,
      img: "/img/img-example.jpg",
      text: "Vitalik lorem ipsum",
      date: "07-10-2021",
      category: "A"
    },
    {
      id: 4,
      img: "/img/img-example2.jpg",
      text: "Vitalik lorem ipsum",
      date: "01-4-2021",
      category: "A"
    },
    {
      id: 5,
      img: "/img/img-example.jpg",
      text: "Vitalik lorem ipsum",
      date: "01-2-2021",
      category: "B"
    },
    {
      id: 6,
      img: "/img/img-example2.jpg",
      text: "Vitalik lorem ipsum",
      date: "01-9-2021",
      category: "B"
    },
    {
      id: 7,
      img: "/img/img-example.jpg",
      text: "Vitalik lorem ipsum",
      date: "01-10-2021",
      category: "B"
    },

  ]

  return (
    <div className="container">
      <div className="slider">
        <Carusel imgList={cardData}/>
      </div>
      <div className="filter">
        <input className="filter__item" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <select className="filter__item" onChange={(e) => setDateFilter(e.target.value)} value={dateFilter}>
          <option value="unset">Order by date</option>
          <option value="newFisrt">New</option>
          <option value="oldFirst">Old</option>
        </select>
        <select className="filter__item" onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
          <option value="unset">Filter by category</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select>
      </div>

      <CardList cardData={cardData} searchField={search} dateFilter={dateFilter} categoryFilter={categoryFilter}/>
    </div>
  )
}
export default MainPages;


