<script>

    import countryFlagEmoji from "country-flag-emoji";

    export let id;
    export let association;
    export let country;
    export let name;

    function showEmoji(countryCode) {
        let flagEmoji = countryFlagEmoji.get(countryCode);
        return flagEmoji.emoji;
    }
    
</script>

<style lang="scss">
    .card {
        border-radius: 6px;
        background: #fff;
        -webkit-font-smoothing: antialiased;
        color: #47525d;
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.05);
        margin-bottom: 24px;
        position: relative;
        padding-bottom: 14px;
        overflow: hidden;

        .thumb {
            top: 0;
            max-height: 200px;
            overflow: hidden;
            width: 100%;
            margin-bottom: 14px;

            img {
                width: 100%;
                object-fit: cover;
            }
        }
        .name {
            font-size: 20px;
            font-weight: bold;
            padding-left: 14px;
        }        
        .details {
            text-align: left;
            line-height: 20px;
            padding-left: 14px;
        }
    }
</style>

<div class="col-12 col-sm-3">
    <div class="card">
        <div class="thumb">
            <img src="/photos/golden-retriever-puppy.jpg">
        </div>
        <div class="name">{ name }</div>
        <div class="details">
            {#if country}
            <div>Country: { showEmoji(country) }</div>
            {/if}
            {#if association}
            <div>Association: { association }</div>
            {/if}
        </div>
    </div>
</div>