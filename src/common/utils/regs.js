export var password = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).[0-9a-zA-Z]{5,50}$/
export var emptyReg = /^\s*$/g
export var twoNumberReg = /^\d+\.?(\d{1,2})?$/
export var identityNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
export var positiveNumberReg = /^[0-9]*[1-9][0-9]*$/
export var numLetterRegs = /^[a-zA-Z0-9_]{0,30}$/
export var phoneReg = /^((0\d{2,3}-\d{7,8})|(1[3584769]\d{9}))$/
export var bankReg = /^([1-9]{1})(\d{10,25})$/
export var nameReg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
export var fourNumReg = /^\d{4}$/
export var sixNumReg = /^\d{6}$/
export var fourReg = /^[a-zA-Z0-9]{4}$/
export var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/