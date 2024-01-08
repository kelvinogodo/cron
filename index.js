const initiateCron =async () => {
    await fetch("https://diversewealth.org/api/cron")
}
initiateCron()