import { Counters } from "../entities/utility.clases"
export class Counter extends Counters{

}
const adrian= new Counter("Adrian")
const daniel = new Counter("Daniel")
console.log(adrian.count())
console.log(daniel.count(),daniel.getResponsable())
