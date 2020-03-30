class ImageList extends React.Component {

    renderImage = () => {
        return this.props.images.map((image) => {
            return (
                <img
                    className="card"
                    src={image.urls.regular}
                    key={image.id}
                    alt={image.alt_description}
                    title={image.alt_description}
                />
            )
        })
    }

    render() {
        return (
            <div className="card-columns">
                {this.renderImage()}
            </div>
        )
    }
}