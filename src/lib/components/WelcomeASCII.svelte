<div class="gradient-text">
&nbsp;/$$      /$$           /$$                                            
| $$  /$ | $$          | $$                                            
| $$ /$$$| $$  /$$$$$$ | $$  /$$$$$$$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$ 
| $$/$$ $$ $$ /$$__  $$| $$ /$$_____/ /$$__  $$| $$_  $$_  $$ /$$__  $$
| $$$$_  $$$$| $$$$$$$$| $$| $$      | $$  \ $$| $$ \ $$ \ $$| $$$$$$$$
| $$$/ \  $$$| $$_____/| $$| $$      | $$  | $$| $$ | $$ | $$| $$_____/
| $$/   \  $$|  $$$$$$$| $$|  $$$$$$$|  $$$$$$/| $$ | $$ | $$|  $$$$$$$
|__/     \__/ \_______/|__/ \_______/ \______/ |__/ |__/ |__/ \_______/
</div>
<style scoped>
@keyframes gradient-moving {
	from {
		background-position: 0px 0px;
	}
	to {
		background-position: 282px 0px;
	}
}
.gradient-text {
	background: repeating-linear-gradient(-45deg, white, #a5b4fc, white 200px);
	background-clip: text;

	/* I honestly don't know why it's 282px */
	background-size: 282px 200px;

	animation: gradient-moving 3s;
	animation-timing-function: linear;
  animation-iteration-count: infinite;

	color: transparent;
}
</style>