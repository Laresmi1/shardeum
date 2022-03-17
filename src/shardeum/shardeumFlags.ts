/**
 * putting some compile time flags in here.
 * Likely to refactor these away in the future
 */

export let contractStorageKeySilo = true // do we want to calcultate contract storage keys that are close to the CA account address?
export let temporaryParallelOldMode = false // Set of temporary hacks that allow running ShardeumState with some old logic.
export let globalCodeBytes = true
export let VerboseLogs = false //set this to false to reduce logging that can impact perf tests or demos
export let Virtual0Address = true
export let GlobalNetworkAccount = true
export let NodeReward = true