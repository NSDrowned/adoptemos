<script>   

    import Language from '../../../stores/language.js';

    function changeLanguage(lang) {
        Language.update(storedLanguage => {
            return { language: lang };
        });
    }

</script>

<style lang="scss">
    .language {
        position: absolute;
        top: -28px;
        right: 4px;
        font-size: 12px;

        span {
            cursor: pointer;
        }
    }
</style>

<div class="language">
    <span on:click={() => changeLanguage('en')}>English</span> - <span on:click={() => changeLanguage('es')}>Espa&ntilde;ol</span>
</div>