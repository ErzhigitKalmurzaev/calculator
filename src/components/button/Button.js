
const Button = ({calc, setCalc, value}) => {
    
    const getStyleName = btn => {
        const className = {
          '=': 'equals',
          '*': 'opt',
          '-': 'opt',
          '+': 'opt',
          '/': 'opt',
        }
        return className[btn] || ''
      }

      const commaClick = () => {
        setCalc({
          ...calc,
          num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        });
      }
      
      const resetClick = () => {
        setCalc({ sign: '', num: '', res: 0 })
      }

      
      const handleClickButton = () => {
        const numberString = value.toString()
        
        let numberValue;
        if(numberString === '0' && calc.num === 0) {
          numberValue = "0"
        } else {
          numberValue = calc.num + numberString
        }
    
        setCalc({
          ...calc,
          num: numberValue
        })
      }

      const inputValidation = () =>{
        if(calc.num[calc.num.length-1] >= 0){
          console.log(calc.num[calc.num.length-1])
        }
        else{
          calc.num = calc.num.substring(0, calc.num.length - 1)
        }
      }
      
      const signClick = () => {
        inputValidation(calc.num);
        if(calc.res === 0 && calc.num !== ''){
          setCalc({
            ...calc,
            sign: value,
            num: calc.num + value
          })
        }else if(calc.num !== ''){
          setCalc({
            sign: value,
            num: calc.res + value,
            res: 0
          })
        }
      }
      
      const equalsClick = () => {
        inputValidation();
        if(calc.num !== ''){
          // eslint-disable-next-line no-eval
          let sum = eval(calc.num)
          setCalc({
                res: Number(sum),
                sign: '',
                num: ''
              })
        }
      }
      
      const persenClick = () => {
        setCalc({
          num: (calc.num / 100),
          res: (calc.res / 100),
          sign: ''
        })
      }
      
      const invertClick = () => {
        setCalc({
          num: calc.num ? calc.num * -1 : 0,
          res: calc.res ? calc.res * -1 : 0,
          sign: ''
        })
      }
    
      const onBtnClick = () => {
        const results = {
            '.': commaClick,
            'C': resetClick,
            '/': signClick,
            '*': signClick,
            '-': signClick,
            '+': signClick,
            '=': equalsClick,
            '%': persenClick,
            '+-': invertClick
          }
          if(results[value]) {
            return results[value]()
          } else {
            return handleClickButton()
          }
      }

    return (
        <button onClick={onBtnClick}  className={`${getStyleName(value)} button`}>{value}</button>
    )
};

export default Button;