import React, { useState } from 'react'
import './Favorite.css'
import { useDispatch, useSelector } from 'react-redux'
import {addBascket , removeCards } from '../../redux/actions/actions';


const FavoritePage = () => {
	const dispatch = useDispatch()
	const data = useSelector(state => state.favoriteReducer.data)



	const add = () => {
		dispatch(addBascket(data))
	}
	const remove = id => {
		dispatch(removeCards(id))
	}

	return (
		<div>
			<div className="Favorite">
			<h2 className="Izbrannoe">Избранное</h2>
		{data.map((item) => {
			return (
				<div className='card'>
				<div className='container'>
					<div className='phone' key={item.id}>
						<img src={item.img} />
					</div>
					<div className='r-p'>
						<div className='Title'>
							<h2>{item.title}<span>{item.vershion}</span></h2>
						</div>
						<div className='l-p'>
							<div className='Otzivy'>
								<div className='img-otzivov'>
									<img src="/img/star.png" alt="Star" />
									<img src="/img/star.png" alt="Star" />
									<img src="/img/star.png" alt="Star" />
									<img src="/img/star.png" alt="Star" />
									<img src="/img/star.png" alt="Star" />
								</div>
								<p>15 отзывов</p>
							</div>
						</div>
						<div className='datails'>
							<p><span>Процессор:</span>{item.porc}</p>
							<p><span>Основная камера:</span>{item.Mainphoto}</p>
							<p><span>Фронтальная камера:</span>{item.secondPhoto}</p>
							<p><span>Встроенная память:</span>{item.ssd}</p>
							<p><span>Оперативная память:</span>{item.ozu}</p>
						</div>
					</div>
					<div className='buy-remove ml-50'>
						<h2>{item.valuta}</h2>
						<div className='buttons d-flex flex-column'>
							<button className='add mb-10'>В корзину</button>
							<button className='remove d-flex ml-20'><img className='mr-15' src='/img/Icon.png' />Удалить</button>
						</div>
					</div>
				</div>
			</div>
			)
		})}
		</div>
		</div>
	)
}

export default FavoritePage
