import { Container, Content, Row } from "./style"
import Input from './components/Input'
import Button from "./components/Button";
import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const handleAddNumber = (num) =>{
    setCurrentNumber(prev => `${prev == '0' ? '': prev}${num}`)
  }
  const handleOnClear = () =>{
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };
  const handleSumNumbers= () =>{
    if(firstNumber == '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
      
      
    }
  } 

  const handleMinusNumbers= () =>{
    if(firstNumber == '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }else{
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }   
  const handleMultNumbers= () =>{
    if(firstNumber == '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    }else{
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }   
  const handleDivNumbers= () =>{
    if(firstNumber == '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }else{
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }   
  const handlePercNumbers = () =>{
    setCurrentNumber(currentNumber/100)
     
  }
 const handlePotenNumbers = () =>{
  if(firstNumber == '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('^');
  }else{
    const sum = Math.pow(Number(firstNumber), Number(currentNumber));
    setCurrentNumber(String(sum))
    setOperation('')
  }
 }
  const handleEquals= () =>{
    if(firstNumber != '0' && operation != '' && currentNumber != '0'){
      switch (operation) {
        case '+':
            handleSumNumbers();
          break;
        case '-':
            handleMinusNumbers();
            break;
        case '*':
            handleMultNumbers();
            break;
        case '/':
            handleDivNumbers();    
            break;
            case '%':
              handlePercNumbers();
              break;
          case '^':
              handlePotenNumbers();    
              break    
        default:
          break;
      }

   
    }
  } 
  return (
  <Container>
    <Content>
      <Input value={currentNumber}></Input>
      <Row>
      <Button label="*" onClick={handleMultNumbers}/>
      <Button label="/"  onClick={handleDivNumbers}/>
      <Button label="c"  onClick={handleOnClear}/>
      <Button label="."  onClick={() => handleAddNumber('.')}/>
      </Row>
      <Row>
      <Button label="7"  onClick={() => handleAddNumber('7')}/>
      <Button label="8"  onClick={() => handleAddNumber('8')}/>
      <Button label="9"  onClick={() => handleAddNumber('9')}/>
      <Button label="-"  onClick={handleMinusNumbers}/>
      </Row>
      <Row>
      <Button label="6"  onClick={() => handleAddNumber('6')}/>
      <Button label="5"  onClick={() => handleAddNumber('5')}/>
      <Button label="4"  onClick={() => handleAddNumber('4')}/>
      <Button label="+"  onClick={handleSumNumbers}/>
      </Row>
      <Row>
      <Button label="1"  onClick={() => handleAddNumber('1')}/>
      <Button label="2"  onClick={() => handleAddNumber('2')}/>
      <Button label="3"  onClick={() => handleAddNumber('3')}/>
      <Button label="="  onClick={handleEquals}/>
      </Row>
      <Row>
      <Button label="Pi"  onClick={() => handleAddNumber('3.1415926535897')}/>
      <Button label="0"  onClick={() => handleAddNumber('0')}/>
      <Button label="^"  onClick={handlePotenNumbers}/>
      <Button label="%"  onClick={handlePercNumbers}/>
      </Row>
      
    </Content>
  
  </Container>
  );
}

export default App;
