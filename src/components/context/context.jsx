// 1) 创建Context容器对象：
// 	const XxxContext = React.createContext()  
	
// 2) 渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：
// 	<xxxContext.Provider value={数据}>
// 		子组件
//     </xxxContext.Provider>
    
// 3) 后代组件读取数据：

// 	//第一种方式:仅适用于类组件 
// 	  static contextType = xxxContext  // 声明接收context
// 	  this.context // 读取context中的value数据
	  
// 	//第二种方式: 函数组件与类组件都可以
// 	  <xxxContext.Consumer>
// 	    {
// 	      value => ( // value就是context中的value数据
// 	        要显示的内容
// 	      )
// 	    }
// 	  </xxxContext.Consumer>


import React, { Component } from 'react'

const MyContext = React.createContext()
const {Provider,Consumer} = MyContext
export default class A extends Component {

    state ={username:'tom',age:12}

  render() {    
    const {username,age}=this.state
    return (
      <div>
        我是A组件，我的用户名是{username}
        <Provider value={{username,age}}>
        <B/>
        </Provider>
      </div>
    )
  }
}
 class B extends Component {
  render() {
    return (
      <div>
        我是B组件
        <C/>
      </div>
    )
  }
}
//  class C extends Component {
//     static contextType = MyContext
//   render() {
//     console.log(this.context);
//     const {username,age} = this.context
//     return (
//       <div>我是C组件,{username},{age}
//       </div>
//     )
//   }
// }

function C(){
 
            return (
              <div>我是C组件,我收到的名字是
                <Consumer>
                    {
                        value=>{
                            return `${value.username},年龄是${value.age}`
                        }
                    }
                </Consumer>

              </div>
            )
          }
