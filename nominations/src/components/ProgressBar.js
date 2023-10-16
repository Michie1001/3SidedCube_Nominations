const ProgressBar = () => {
    const steps = ['create', 'reason', 'process'];

    return (
        <div className="flex justify-between">
            {
                steps?.map((step, i) => {
                    <div key={i}>
                        <div>{i + 1}</div>
                        <p>{step}</p>
                    </div>
                })
            }
        </div>
    )
}

export default ProgressBar;