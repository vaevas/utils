const email = 'test@example.com';
/**
 * 单个导入使用
 */
import { emailCheck } from './src/validates/index';
if (emailCheck(email)) {
  console.log('email is valid');
} else {
  console.log('email is invalid');
}
/**
 * 整个导入
 */
import validate from './src/index';
if (validate.emailCheck(email)) {
  console.log('email is valid');
} else {
  console.log('email is invalid');
}
