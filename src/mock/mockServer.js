import Mock from 'mockjs'
import data from './mockdata.json'

Mock.mock('/goods', data.goods)
Mock.mock('/ratings', data.ratings)
Mock.mock('/info', data.info)