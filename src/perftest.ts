
import { createParser} from './index';


const parser = createParser();
const iterations = 10000;
async function test() {
    console.time('Function #1');
    for(var i = 0; i < iterations; i++ ){
        parser.parse('git    "test quotes for match" "dddd dddd" "another named arg with quotes"  withoutQuotes                 remote                add -origin    "http s:/ /gi thub.com', ["command", "text"]);
    };
    console.timeEnd('Function #1')
}
test()
