import styled from 'styled-components';
const styleDiv = styled.div`/*============= APP CONTAINER ============= */
.app-container {
    text-align: center;
    width: auto;
}

/*============= TITLE ============= */
.title {
    font-family: georgia, times, serif;
    font-size: 24px;
    font-weight: none;
    text-align: center;
    padding-bottom: 20px;
}

ul {
     list-style: none; 
     display: flex;
}

/*=============LIST ENTRY============= */
.list {
    display: flex;
    flex-direction: row;
    /* overflow: hidden; */
    align-items: center;
    margin-top: 30px;
}

.list-entry {
    text-align: center;
    list-style-type: none;
    text-align: center;
    margin-bottom: 50px;
}

.list-entry-about {
    font-size: 12px;
}

.list-entry-name {
  font-size: 14px;
  font-weight: bold;
}

.list-entry-cost {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 10px;
}

.list-entry-picture {
    width: 135px;
    height:135px;
}

/*=============STARS============= */

.checked {
    color: #c4c4c4;
}

/*=============BUTTONS============= */

.left-arrow {
    float: left;
    color: #111;
    cursor: pointer;
    opacity: .75;
    transform: translateY(-50%);
    transition: opacity .15s cubic-bezier(.4, 0, 1, 1);
    z-index: 10000000;
    /* margin-right: 200px; */
    float: left;
    border-right: 2.2px solid black;
    border-bottom: 2.2px solid black;
    border-left: white;
    border-top: white;
    width: 25px; 
    height: 25px;
    transform: rotate(-225deg);
}

.left-arrow:focus {
    outline: none;
}

.right-arrow {
    float: right;
    color: #111;
    cursor: pointer;
    opacity: .75;
    transform: translateY(-50%);
    transition: opacity .15s cubic-bezier(.4, 0, 1, 1);
    z-index: 1000000;
    border-right: 2.2px solid black;
    border-bottom: 2.2px solid black;
    width: 25px;
    height: 25px;
    border-left: white;
    border-top: white;
    transform: rotate(-45deg);
}

.right-arrow:focus {
    outline: none;
}

.carousel {
    display: flex;
    flex-direction:  row;
    width: 900px;
    text-align: center;
    /* width: 50%; */
    margin: 0 auto;
    
    
}
`

module.exports = styleDiv;