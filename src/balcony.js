import { validate } from "./modules/validate";
import { calc } from "./modules/calc";
import { modal } from "./modules/modal";
import { scrollToUp } from "./modules/scrollToUp";
import { sliders } from "./modules/sliders";
import { timer } from "./modules/timer";
import { sendForm } from "./modules/sendForm";

modal();
timer('19 november 2022');
scrollToUp();
sliders();
calc();
validate();
sendForm();