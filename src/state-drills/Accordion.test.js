import React from 'react';
//import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from './Accordion';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

describe('<Accordion />', () => {
  test('renders empty given no props', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('renders no section by default', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('renders content from a clicked section', () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper.find('button').at(0).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('renders content from last section when multiple sections have been clicked', () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})