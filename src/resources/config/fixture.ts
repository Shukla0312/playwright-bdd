import { test as base, createBdd } from 'playwright-bdd';

export const test = base;
export const { Given, When, Then, Before, BeforeAll, After, AfterAll } = createBdd(test);