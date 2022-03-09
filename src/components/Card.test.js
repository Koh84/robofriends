import { shallow, mount, render } from 'enzyme';
import Card from './Card'
// 90% of the time, we use shallow as it only render 1 component, 
// even if there are others components inside your test component.

// use mount when the test we run need to access dom api, 
// mount actually renders the full dom. It is useful when you have components
// that reacts with the dom api. i.e. accessing queryselector
// or when the component you want to test contain react life cycles. i.e. componentdidmount
// mount is recommended to work with jsdom. 
// mount actually mount the component on a dom which means components affect each other.

// render is use to render a react component to a static html
// it use a library call cherio? 
// its function is in between shallow and mount

// it('expect to render Card component', () => {
//     expect(shallow(<Card />).length).toEqual(1);
// })

it('expect to render Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
})


