<script>

    export let language;
    
    // components
    import NavLink from "../../components/NavLink/NavLink.svelte";
    import LanguageSwitch from './LanguageSwitch/LanguageSwitch.svelte';

</script>

<style lang="scss">

    .navbar {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        padding: 14px;
        z-index: 100;

        .container {
            border-radius: 6px;
            background-color: #FFF;
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.15);
            padding-left: 68px;
            position: relative;
            height: 60px;
            margin-top: 24px;
            
            .logo {
                position: absolute;
                left: 14px;
                top: 14px;

                img {
                    width: 40px;
                }
            }

            .sitename {
                font-size: 26px;
                letter-spacing: -1px;
                font-weight: bold;
                color: #797979;                
            }

            ul {
                list-style: none;
                margin: 0;
                padding: 0;

                li {
                    display: inline-block;
                    font-size: 0;

                    :global(a) {
                        display: block;
                        margin: 0;
                        padding: 0;
                        height: 60px;
                        line-height: 60px;
                        color: #888;
                        border-right: 1px dotted #e6e6e6;
                        padding-right: 14px;
                        padding-left: 14px;
                        text-align: center;
                        font-size: 16px;
                    
                        &:hover {
                            background-color: #f9f9f9;
                        }
                    }             
                }
                li:first-child {
                    :global(a) {
                        border-left: 1px dotted #e6e6e6;
                    }
                }
            }
        }
    }

</style>

<nav class="navbar">
    <div class="container">
        <LanguageSwitch />
        <div class="logo">
            <NavLink classes="" to="/"><img src="assets/img/adoptemos-logo.png"></NavLink>
        </div>
        <NavLink classes="" to="/"><div class="sitename">Adoptemos.org</div></NavLink>
        <ul class="d-none d-lg-block">
            <li><NavLink classes="" to="/">{language == 'en' ? 'Home' : 'Inicio' }</NavLink></li>
            <li><NavLink classes="" to="adopt">{language == 'en' ? 'Adopt' : 'Adopta' }</NavLink></li>
            <li><NavLink classes="" to="lostfound">{language == 'en' ? 'Lost & Found' : 'Perdidos' }</NavLink></li>
            <li><NavLink classes="" to="neuter">{language == 'en' ? 'Spay & Neuter' : 'Castración' }</NavLink></li>
            <li><NavLink classes="" to="events">{language == 'en' ? 'Events' : 'Eventos' }</NavLink></li>
            <li><NavLink classes="" to="donate">{language == 'en' ? 'Donate' : 'Donaciones' }</NavLink></li>
            <li><NavLink classes="" to="store">{language == 'en' ? 'Shop' : 'Shop' }</NavLink></li>
        </ul>        
    </div>
</nav>